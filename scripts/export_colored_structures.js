#!/usr/bin/env node
/*
 Export Mol* colored structures based on merged data.

 Usage:
   node scripts/export_colored_structures.js \
     --input apidata/merged_data_0907.json \
     --output apidata/colored_structures \
     [--single Hfq-aptamer]
*/

const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');
const puppeteer = require('puppeteer');

function parseArgs() {
  const args = process.argv.slice(2);
  const out = { input: 'apidata/merged_data_0907.json', output: 'apidata/colored_structures', single: null, port: 9234 };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--input') out.input = args[++i];
    else if (a === '--output') out.output = args[++i];
    else if (a === '--single') out.single = args[++i];
    else if (a === '--port') out.port = parseInt(args[++i], 10);
  }
  return out;
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function startStaticServer(rootDir, port) {
  const server = http.createServer((req, res) => {
    const parsed = url.parse(req.url);
    let pathname = decodeURIComponent(parsed.pathname || '/');
    // Prevent directory traversal
    pathname = pathname.replace(/\.+/g, '.');
    const filePath = path.join(rootDir, pathname);
    fs.stat(filePath, (err, stats) => {
      if (err) {
        res.statusCode = 404; res.end('Not found'); return;
      }
      if (stats.isDirectory()) {
        res.statusCode = 403; res.end('Forbidden'); return;
      }
      const ext = path.extname(filePath).toLowerCase();
      const ctype = ext === '.html' ? 'text/html' : ext === '.js' ? 'text/javascript' : ext === '.css' ? 'text/css' : 'application/octet-stream';
      res.setHeader('Content-Type', ctype);
      fs.createReadStream(filePath).pipe(res);
    });
  });
  return new Promise(resolve => server.listen(port, () => resolve(server)));
}

async function run() {
  const args = parseArgs();
  const repoRoot = process.cwd();
  const inputPath = path.resolve(args.input);
  const outputDir = path.resolve(args.output);
  const exporterHtml = path.resolve('scripts/molstar_exporter.html');

  const raw = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
  const aptamers = raw.aptamers || {};

  // Filter 3D-capable aptamers
  const slugs = Object.keys(aptamers).filter(slug => {
    const st = aptamers[slug].structure || {};
    const viewer = st.viewer || {};
    const pdb = (viewer.pdb_info || {}).pdb_file_path;
    const imgs3d = ((st.images || {}).3d || []);
    return Boolean(pdb) || imgs3d.length > 0;
  });

  const targets = args.single ? slugs.filter(s => s === args.single) : slugs;
  ensureDir(outputDir);

  // Start static server to serve repository files
  const server = await startStaticServer(repoRoot, args.port);

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  const index = [];
  for (const slug of targets) {
    const entry = aptamers[slug];
    const st = entry.structure || {};
    const viewer = st.viewer || {};
    const pdb = (viewer.pdb_info || {}).pdb_file_path;
    const colorSchemes = viewer.color_schemes || [];
    if (!pdb) {
      // Skip if no PDB file path (images-only 3D)
      continue;
    }
    const relPdb = pdb.startsWith('/') ? pdb : '/' + pdb;
    const urlHtml = `http://127.0.0.1:${args.port}/scripts/molstar_exporter.html?pdb=${encodeURIComponent(relPdb)}`;

    await page.goto(urlHtml, { waitUntil: 'networkidle2' });

    // Apply colors
    const applied = await page.evaluate(async (rules) => {
      // Normalize rule keys from Python-style to plugin expected
      const data = (rules || []).map(r => ({
        struct_asym_id: r.struct_asym_id,
        start_residue_number: r.start_residue_number,
        end_residue_number: r.end_residue_number,
        color: r.color
      }));
      return await window.applyColors(data, { r:255, g:255, b:255 });
    }, colorSchemes);

    // Export state
    const stateJson = await page.evaluate(async () => await window.exportState());

    const outDir = path.join(outputDir, slug);
    ensureDir(outDir);
    const files = {};
    // Save config and state
    const config = {
      slug,
      title: entry.title || (entry.post && entry.post.meta && entry.post.meta.title) || null,
      pdb_file_path: pdb,
      color_schemes: colorSchemes,
      applied: !!applied,
      exported_state: !!stateJson
    };
    fs.writeFileSync(path.join(outDir, 'config.json'), JSON.stringify(config, null, 2));
    files.config = 'config.json';
    if (stateJson) {
      fs.writeFileSync(path.join(outDir, 'state.molj'), stateJson);
      files.state = 'state.molj';
    }

    index.push({ slug, title: config.title, pdb: pdb, has_state: !!stateJson, out_dir: path.relative(outputDir, outDir) });
    console.log(`Exported ${slug}: state=${!!stateJson}`);
  }

  fs.writeFileSync(path.join(outputDir, 'index.json'), JSON.stringify({
    generated_at: new Date().toISOString(),
    total: index.length,
    items: index
  }, null, 2));

  await browser.close();
  server.close();
}

run().catch(err => { console.error(err); process.exit(1); });

