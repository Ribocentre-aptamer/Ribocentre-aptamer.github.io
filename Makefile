# Ribocentre-aptamer site build system
# Requires: Node.js 16+, Ruby with Jekyll

.PHONY: help install clean build serve dev test

# Default target
help: ## Show this help message
	@echo "Ribocentre Aptamer Site - Build System"
	@echo "======================================"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Install all dependencies (Node.js and Ruby)
	@echo "📦 Installing Node.js dependencies..."
	npm install
	@echo "💎 Installing Ruby dependencies..."
	bundle install
	@echo "✅ All dependencies installed!"

clean: ## Clean all build artifacts
	@echo "🧹 Cleaning build artifacts..."
	npm run clean
	rm -rf _site
	rm -rf .jekyll-cache
	@echo "✅ Clean completed!"

build: ## Build site for production
	@echo "🚀 Building site for production..."
	npm run build:prod
	@echo "✅ Production build completed!"

serve: ## Start development server
	@echo "🔧 Starting development server..."
	npm run serve
	@echo "✅ Development server started!"

dev: ## Start development server with file watching
	@echo "👀 Starting development server with file watching..."
	npm run dev

test: ## Test minification setup
	@echo "🧪 Testing minification setup..."
	npm run test:minify

# Advanced targets
build-js: ## Build only JavaScript files
	@echo "🔧 Building JavaScript files..."
	npm run minify:js

build-css: ## Build only CSS files  
	@echo "🎨 Building CSS files..."
	npm run minify:css

watch-js: ## Watch JavaScript files for changes
	@echo "👀 Watching JavaScript files..."
	npm run watch:js

watch-css: ## Watch CSS files for changes
	@echo "👀 Watching CSS files..."
	npm run watch:css

# Production deployment
deploy: clean build ## Clean, build and prepare for deployment
	@echo "🚀 Site ready for deployment!"
	@echo "📁 Built files are in _site/"

# Development shortcuts
quick-build: build-js build-css ## Quick build of assets without Jekyll
	@echo "⚡ Quick asset build completed!"

# Check system requirements
check: ## Check system requirements
	@echo "🔍 Checking system requirements..."
	@node --version || (echo "❌ Node.js not found" && exit 1)
	@ruby --version || (echo "❌ Ruby not found" && exit 1)
	@bundle --version || (echo "❌ Bundler not found" && exit 1)
	@echo "✅ System requirements met!" 