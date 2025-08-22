# syntax=docker/dockerfile:1
FROM ruby:3.3-bookworm

# 基础依赖
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential git nodejs && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/jekyll
ENV BUNDLE_PATH=/usr/local/bundle BUNDLE_JOBS=4 BUNDLE_RETRY=3 LC_ALL=C.UTF-8

# 先拷贝 Gem 相关文件，利用层缓存
COPY Gemfile Gemfile.lock ./

# 建议：避免 sass-embedded 跨架构问题（若你不是用 github-pages）
# 你也可以直接把下面这一行写进 Gemfile
RUN gem install bundler:2.6.9 && \
    bundle config set force_ruby_platform true && \
    (bundle add jekyll-sass-converter --version "~> 2.2" || true) && \
    bundle install

# 再拷贝源码（便于后续热更新时挂载覆盖）
COPY . .

EXPOSE 4000
CMD ["bash","-lc","bundle exec jekyll serve --host 0.0.0.0 --livereload --force_polling --incremental"]
