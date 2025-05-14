# Ribocentre-switch Website

This is the website of our riboswitches database.

This website is powered by Jekyll and some Bootstrap, Bootwatch. We tried to make it simple yet adaptable, so that it is easy for you to use it as a template. Plese feel free to copy and modify for your own purposes.  You don't have to link to us or mention us (but of course we appreciate it).

## Docker使用方式

### 构建镜像

```bash
docker build -t ribocentre-aptamer .
```

### 运行容器

```bash
docker run -p 4000:4000 -v $(pwd):/app ribocentre-aptamer
```

访问 http://localhost:4000 即可查看网站。

### 后台运行

```bash
docker run -d -p 4000:4000 -v $(pwd):/app ribocentre-aptamer
```

### 生产环境部署

```bash
docker run -d -p 4000:4000 -e JEKYLL_ENV=production ribocentre-aptamer
```

