FROM ruby:3.1-alpine

# 安装必要的依赖
RUN apk add --no-cache build-base gcc cmake git linux-headers curl

# 设置工作目录
WORKDIR /app

# 复制Gemfile
COPY Gemfile Gemfile.lock ./

# 安装依赖
RUN bundle install

# 复制项目文件
COPY . .

# 确保搜索相关文件存在并有正确权限
RUN mkdir -p js
RUN touch js/simple-jekyll-search.min.js && chmod 755 js/simple-jekyll-search.min.js

# 复制simple-jekyll-search.min.js到根目录和js目录，确保搜索功能正常
RUN cp -f simple-jekyll-search.min.js js/ || echo "可能不存在simple-jekyll-search.min.js文件"

# 创建静态search.json文件作为备份
RUN echo '[]' > static-search.json

# 添加构建钩子，生成有效的search.json
RUN mkdir -p _plugins
RUN echo '# 确保search.json生成有效的JSON\n\
Jekyll::Hooks.register :site, :post_write do |site|\n\
  search_json_path = File.join(site.dest, "search.json")\n\
  if File.exist?(search_json_path)\n\
    content = File.read(search_json_path)\n\
    # 检查JSON是否有效\n\
    begin\n\
      require "json"\n\
      JSON.parse(content)\n\
      puts "search.json 格式有效"\n\
    rescue JSON::ParserError => e\n\
      puts "search.json 格式无效，尝试修复: #{e.message}"\n\
      # 尝试清理内容\n\
      json_start = content.index("[")\n\
      if json_start\n\
        cleaned_content = content[json_start..-1]\n\
        begin\n\
          JSON.parse(cleaned_content)\n\
          # 如果解析成功，保存清理后的内容\n\
          File.write(search_json_path, cleaned_content)\n\
          puts "search.json 已修复"\n\
        rescue JSON::ParserError\n\
          # 如果仍然无效，使用空数组\n\
          File.write(search_json_path, "[]")\n\
          puts "search.json 无法修复，已重置为空数组"\n\
        end\n\
      else\n\
        # 找不到开始标记，使用空数组\n\
        File.write(search_json_path, "[]")\n\
        puts "search.json 无法修复，已重置为空数组"\n\
      end\n\
    end\n\
  else\n\
    puts "search.json 不存在，创建空文件"\n\
    File.write(search_json_path, "[]")\n\
  end\n\
end' > _plugins/search_json_validator.rb

# 暴露端口
EXPOSE 4000

# 设置命令
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"] 