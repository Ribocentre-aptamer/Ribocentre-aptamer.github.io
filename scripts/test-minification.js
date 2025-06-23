#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// Test cases for JavaScript syntax validation
const JS_TEST_CASES = [
  {
    name: 'ES6+ Async/Await',
    code: `async function test() { const result = await fetch('/api'); return result?.json(); }`
  },
  {
    name: 'Optional Chaining',
    code: `const value = window.config?.api?.baseUrl || '/api';`
  },
  {
    name: 'Nullish Coalescing',
    code: `const port = process.env.PORT ?? 3000;`
  },
  {
    name: 'Arrow Functions',
    code: `const filter = (arr) => arr.filter(item => item?.active);`
  },
  {
    name: 'Template Literals',
    code: `const url = \`\${baseUrl}/\${endpoint}?id=\${id}\`;`
  }
];

async function testJavaScriptMinification() {
  console.log(chalk.blue('🧪 Testing JavaScript minification capabilities...\n'));
  
  const { minify } = require('terser');
  const terserOptions = {
    ecma: 2020,
    module: false,
    toplevel: false,
    parse: { ecma: 2020 },
    compress: {
      ecma: 2020,
      warnings: false,
      drop_console: false,
      drop_debugger: true
    },
    mangle: { toplevel: false },
    format: { comments: false, ecma: 2020 }
  };
  
  let allPassed = true;
  
  for (const testCase of JS_TEST_CASES) {
    try {
      console.log(chalk.gray(`Testing: ${testCase.name}`));
      
      const result = await minify(testCase.code, terserOptions);
      
      if (result.error) {
        console.log(chalk.red(`❌ ${testCase.name}: ${result.error.message}`));
        allPassed = false;
      } else {
        console.log(chalk.green(`✅ ${testCase.name}: OK`));
        console.log(chalk.gray(`   Original: ${testCase.code}`));
        console.log(chalk.gray(`   Minified: ${result.code}\n`));
      }
    } catch (error) {
      console.log(chalk.red(`❌ ${testCase.name}: ${error.message}`));
      allPassed = false;
    }
  }
  
  return allPassed;
}

async function testActualFiles() {
  console.log(chalk.blue('📁 Testing actual project files...\n'));
  
  const testFiles = [
    'js/advanced-search.js',
    'js/homepage-main.js', 
    'js/search-utils.js'
  ];
  
  let allPassed = true;
  
  for (const file of testFiles) {
    if (fs.existsSync(file)) {
      try {
        console.log(chalk.gray(`Testing file: ${file}`));
        
        const content = fs.readFileSync(file, 'utf8');
        const { minify } = require('terser');
        
        const result = await minify(content, {
          ecma: 2020,
          parse: { ecma: 2020 },
          compress: { ecma: 2020 },
          format: { ecma: 2020 }
        });
        
        if (result.error) {
          console.log(chalk.red(`❌ ${file}: ${result.error.message}`));
          allPassed = false;
        } else {
          const originalSize = Buffer.byteLength(content, 'utf8');
          const minifiedSize = Buffer.byteLength(result.code, 'utf8');
          const compressionRatio = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);
          
          console.log(chalk.green(`✅ ${file}: OK`));
          console.log(chalk.gray(`   Size: ${(originalSize/1024).toFixed(2)}KB → ${(minifiedSize/1024).toFixed(2)}KB (${compressionRatio}% reduction)\n`));
        }
      } catch (error) {
        console.log(chalk.red(`❌ ${file}: ${error.message}`));
        allPassed = false;
      }
    } else {
      console.log(chalk.yellow(`⚠️  ${file}: File not found`));
    }
  }
  
  return allPassed;
}

async function checkEnvironment() {
  console.log(chalk.blue('🔍 Checking environment...\n'));
  
  // Check Node.js version
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  
  console.log(chalk.gray(`Node.js version: ${nodeVersion}`));
  
  if (majorVersion >= 16) {
    console.log(chalk.green('✅ Node.js version is compatible\n'));
  } else {
    console.log(chalk.red('❌ Node.js version should be 16 or higher\n'));
    return false;
  }
  
  // Check required packages
  const requiredPackages = ['terser', 'postcss', 'cssnano', 'glob', 'chalk'];
  let allInstalled = true;
  
  for (const pkg of requiredPackages) {
    try {
      require.resolve(pkg);
      console.log(chalk.green(`✅ ${pkg}: installed`));
    } catch (error) {
      console.log(chalk.red(`❌ ${pkg}: not installed`));
      allInstalled = false;
    }
  }
  
  console.log('');
  return allInstalled;
}

async function runTests() {
  console.log(chalk.bold('🚀 Minification Test Suite\n'));
  
  const envOk = await checkEnvironment();
  if (!envOk) {
    console.log(chalk.red('❌ Environment check failed. Please install missing dependencies.'));
    process.exit(1);
  }
  
  const syntaxOk = await testJavaScriptMinification();
  const filesOk = await testActualFiles();
  
  console.log(chalk.blue('📊 Test Summary:'));
  console.log(chalk.white(`Environment: ${envOk ? 'PASS' : 'FAIL'}`));
  console.log(chalk.white(`Syntax tests: ${syntaxOk ? 'PASS' : 'FAIL'}`));
  console.log(chalk.white(`File tests: ${filesOk ? 'PASS' : 'FAIL'}`));
  
  if (envOk && syntaxOk && filesOk) {
    console.log(chalk.green('\n🎉 All tests passed! Your minification setup is ready.'));
    process.exit(0);
  } else {
    console.log(chalk.red('\n💥 Some tests failed. Please check the output above.'));
    process.exit(1);
  }
}

// Run tests
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { testJavaScriptMinification, testActualFiles, checkEnvironment }; 