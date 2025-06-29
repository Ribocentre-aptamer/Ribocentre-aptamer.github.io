#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { minify } = require('terser');
const glob = require('glob');
const chalk = require('chalk');

// Configuration
const CONFIG = {
  inputDir: 'js',
  outputDir: 'js/dist',
  excludePatterns: [
    'js/dist/**',
    'js/**/*.min.js',
    'js/**/jquery*.js',      // Skip jQuery files (already minified)
    'js/**/bootstrap*.js',   // Skip Bootstrap files (already minified)
    'js/**/d3.js',          // Skip D3 (large library)
    'js/**/*.min.*.js'      // Skip already minified files
  ],
  terserOptions: {
    ecma: 2020,             // Support ES2020 features including optional chaining
    module: false,
    toplevel: false,
    parse: {
      ecma: 2020,
    },
    compress: {
      ecma: 2020,
      warnings: false,
      drop_console: false,   // Keep console.log for debugging
      drop_debugger: true,
      dead_code: true,
      unused: true,
      conditionals: true,
      evaluate: true,
      loops: true,
      hoist_funs: true,
      pure_getters: true,
      unsafe_arrows: true,
      unsafe_methods: true,
      arguments: true
    },
    mangle: {
      toplevel: false,
      eval: true,
      keep_fnames: false,
      reserved: []
    },
    format: {
      comments: false,
      beautify: false,
      ecma: 2020
    },
    sourceMap: {
      filename: undefined,
      url: undefined,
      includeSources: false
    }
  }
};

// Utility functions
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function getFileSizeKB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2);
}

function getCompressionRatio(originalSize, minifiedSize) {
  const ratio = ((originalSize - minifiedSize) / originalSize) * 100;
  return ratio.toFixed(1);
}

// Main minification function
async function minifyJavaScript() {
  console.log(chalk.blue('🔧 Starting JavaScript minification with Terser...'));
  
  try {
    // Ensure output directory exists
    ensureDirectoryExists(CONFIG.outputDir);
    
    // Find all JS files
    const jsFiles = glob.sync(`${CONFIG.inputDir}/**/*.js`, {
      ignore: CONFIG.excludePatterns
    });
    
    console.log(chalk.gray(`Found ${jsFiles.length} JavaScript files to process`));
    
    let totalOriginalSize = 0;
    let totalMinifiedSize = 0;
    let processedCount = 0;
    const results = [];
    
    for (const inputFile of jsFiles) {
      try {
        console.log(chalk.gray(`Processing: ${inputFile}`));
        
        // Read source file
        const sourceCode = fs.readFileSync(inputFile, 'utf8');
        
        // Calculate relative path for output
        const relativePath = path.relative(CONFIG.inputDir, inputFile);
        const outputFile = path.join(CONFIG.outputDir, relativePath);
        const outputDir = path.dirname(outputFile);
        
        // Ensure output directory exists
        ensureDirectoryExists(outputDir);
        
        // Minify the code
        const result = await minify(sourceCode, CONFIG.terserOptions);
        
        if (result.error) {
          console.error(chalk.red(`❌ Error minifying ${inputFile}:`), result.error);
          continue;
        }
        
        // Write minified file
        fs.writeFileSync(outputFile, result.code);
        
        // Calculate sizes
        const originalSize = Buffer.byteLength(sourceCode, 'utf8');
        const minifiedSize = Buffer.byteLength(result.code, 'utf8');
        const compressionRatio = getCompressionRatio(originalSize, minifiedSize);
        
        totalOriginalSize += originalSize;
        totalMinifiedSize += minifiedSize;
        processedCount++;
        
        results.push({
          input: inputFile,
          output: outputFile,
          originalSize: originalSize,
          minifiedSize: minifiedSize,
          compressionRatio: compressionRatio
        });
        
        console.log(chalk.green(`✅ ${inputFile} → ${outputFile}`));
        console.log(chalk.gray(`   ${getFileSizeKB(inputFile)}KB → ${(minifiedSize / 1024).toFixed(2)}KB (${compressionRatio}% reduction)`));
        
      } catch (error) {
        console.error(chalk.red(`❌ Error processing ${inputFile}:`), error.message);
        console.log(chalk.yellow(`   Skipping this file and continuing...`));
        continue;
      }
    }
    
    // Summary
    console.log(chalk.blue('\n📊 Minification Summary:'));
    console.log(chalk.white(`Files processed: ${processedCount}/${jsFiles.length}`));
    console.log(chalk.white(`Total size reduction: ${((totalOriginalSize - totalMinifiedSize) / 1024).toFixed(2)}KB`));
    console.log(chalk.white(`Overall compression ratio: ${getCompressionRatio(totalOriginalSize, totalMinifiedSize)}%`));
    
    // Create a mapping file for Jekyll to use
    const mappingFile = path.join(CONFIG.outputDir, 'file-mapping.json');
    const mapping = {};
    results.forEach(result => {
      const originalPath = result.input.replace(/^js\//, '');
      const minifiedPath = result.output.replace(/^js\//, '');
      mapping[originalPath] = minifiedPath;
    });
    
    fs.writeFileSync(mappingFile, JSON.stringify(mapping, null, 2));
    console.log(chalk.blue(`📝 File mapping saved to: ${mappingFile}`));
    
    console.log(chalk.green('✅ JavaScript minification completed successfully!\n'));
    
  } catch (error) {
    console.error(chalk.red('❌ JavaScript minification failed:'), error);
    process.exit(1);
  }
}

// Handle script errors
process.on('uncaughtException', (error) => {
  console.error(chalk.red('❌ Uncaught Exception:'), error);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error(chalk.red('❌ Unhandled Rejection:'), reason);
  process.exit(1);
});

// Run the minification
if (require.main === module) {
  minifyJavaScript().catch(console.error);
}

module.exports = minifyJavaScript; 