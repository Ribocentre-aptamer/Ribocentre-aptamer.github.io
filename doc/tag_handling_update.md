 # Tag Handling Update (2025-06-23)

## Background
`SearchUtils.processResults` 为提升相关性，把 `title / category / tags / content`
都作为匹配字段。  
`transformSequenceRecord` 曾把 *所有* 属性放进 `tags`，例如  
`Length:78, GC:51.2, Year:1999 …`  
数字查询（如 “78”）因此被高权重命中，却在结果预览里看不到。

## Change
* `tags` 现仅保留 `Type` 和 `Category`（文本型标签）。
* 完整标签移到 `meta_tags`，供高级搜索或其它分析使用。
* 显式数值仍通过
  `sequence_length / gc_content / kd_value / pub_year …` 字段提供。

## Impact
1. 普通搜索不会再因数字而排序异常。
2. 高级搜索如需解析标签，请改用 `item.meta_tags`
   或直接读取专用字段。

(更新模块后请记得在浏览器清缓存或版本化脚本文件)