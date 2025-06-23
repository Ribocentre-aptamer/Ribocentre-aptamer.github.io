require 'json'

module Jekyll
  module MinifiedAssets
    def minified_js(path)
      return path unless production_env?
      
      mapping = load_js_mapping
      minified_path = mapping[path]
      
      if minified_path && file_exists?(minified_path)
        "/#{minified_path}"
      else
        "/#{path}"
      end
    end
    
    def minified_css(path)
      return path unless production_env?
      
      mapping = load_css_mapping
      minified_path = mapping[path]
      
      if minified_path && file_exists?(minified_path)
        "/#{minified_path}"
      else
        "/#{path}"
      end
    end

    private

    def production_env?
      Jekyll.env == 'production'
    end

    def load_js_mapping
      @js_mapping ||= begin
        mapping_file = File.join(@context.registers[:site].source, 'js/dist/file-mapping.json')
        if File.exist?(mapping_file)
          JSON.parse(File.read(mapping_file))
        else
          {}
        end
      end
    end

    def load_css_mapping
      @css_mapping ||= begin
        mapping_file = File.join(@context.registers[:site].source, 'css/dist/file-mapping.json')
        if File.exist?(mapping_file)
          JSON.parse(File.read(mapping_file))
        else
          {}
        end
      end
    end

    def file_exists?(path)
      full_path = File.join(@context.registers[:site].source, path)
      File.exist?(full_path)
    end
  end
end

Liquid::Template.register_filter(Jekyll::MinifiedAssets) 