#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const cssnano = require('cssnano');
const glob = require('glob');
const chalk = require('chalk');

// Configuration
const CONFIG = {
  inputDir: 'css',
  outputDir: 'css/dist',
  excludePatterns: [
    'css/dist/**',
    'css/**/*.min.css',
    'css/**/bootstrap*.css',  // Skip Bootstrap files (already optimized)
    'css/**/*.min.*.css'      // Skip already minified files
  ],
  cssnanoOptions: {
    preset: ['default', {
      discardComments: {
        removeAll: true,
      },
      normalizeWhitespace: true,
      reduceIdents: false,  // Keep class names intact for Jekyll
      zindex: false,        // Don't optimize z-index values
      reduceTransforms: true,
      normalizeUrl: false,  // Keep URLs as-is for Jekyll assets
      discardUnused: false, // Don't remove unused CSS (might be used by Jekyll templates)
      mergeIdents: false,   // Keep identifiers separate
      uniqueSelectors: true,
      autoprefixer: false   // Don't add vendor prefixes automatically
    }]
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
async function minifyCSS() {
  console.log(chalk.blue('🎨 Starting CSS minification with cssnano...'));
  
  try {
    // Ensure output directory exists
    ensureDirectoryExists(CONFIG.outputDir);
    
    // Find all CSS files
    const cssFiles = glob.sync(`${CONFIG.inputDir}/**/*.css`, {
      ignore: CONFIG.excludePatterns
    });
    
    console.log(chalk.gray(`Found ${cssFiles.length} CSS files to process`));
    
    let totalOriginalSize = 0;
    let totalMinifiedSize = 0;
    let processedCount = 0;
    const results = [];
    
    for (const inputFile of cssFiles) {
      try {
        console.log(chalk.gray(`Processing: ${inputFile}`));
        
        // Read source file
        const sourceCSS = fs.readFileSync(inputFile, 'utf8');
        
        // Calculate relative path for output
        const relativePath = path.relative(CONFIG.inputDir, inputFile);
        const outputFile = path.join(CONFIG.outputDir, relativePath);
        const outputDir = path.dirname(outputFile);
        
        // Ensure output directory exists
        ensureDirectoryExists(outputDir);
        
        // Process CSS with PostCSS and cssnano
        const result = await postcss([cssnano(CONFIG.cssnanoOptions)])
          .process(sourceCSS, { 
            from: inputFile, 
            to: outputFile,
            map: false  // Don't generate source maps for now
          });
        
        // Write minified file
        fs.writeFileSync(outputFile, result.css);
        
        // Calculate sizes
        const originalSize = Buffer.byteLength(sourceCSS, 'utf8');
        const minifiedSize = Buffer.byteLength(result.css, 'utf8');
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
    console.log(chalk.blue('\n📊 CSS Minification Summary:'));
    console.log(chalk.white(`Files processed: ${processedCount}/${cssFiles.length}`));
    console.log(chalk.white(`Total size reduction: ${((totalOriginalSize - totalMinifiedSize) / 1024).toFixed(2)}KB`));
    console.log(chalk.white(`Overall compression ratio: ${getCompressionRatio(totalOriginalSize, totalMinifiedSize)}%`));
    
    // Create a mapping file for Jekyll to use
    const mappingFile = path.join(CONFIG.outputDir, 'file-mapping.json');
    const mapping = {};
    results.forEach(result => {
      const originalPath = result.input.replace(/^css\//, '');
      const minifiedPath = result.output.replace(/^css\//, '');
      mapping[originalPath] = minifiedPath;
    });
    
    fs.writeFileSync(mappingFile, JSON.stringify(mapping, null, 2));
    console.log(chalk.blue(`📝 CSS file mapping saved to: ${mappingFile}`));
    
    console.log(chalk.green('✅ CSS minification completed successfully!\n'));
    
  } catch (error) {
    console.error(chalk.red('❌ CSS minification failed:'), error);
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
  minifyCSS().catch(console.error);
}

module.exports = minifyCSS; 