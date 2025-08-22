
在 Hugo 项目中可以通过使用第三方 JavaScript 库来启用数学符号。

<!--more-->

## 配置

你可以通过在站点配置文件或前面的元数据中使用 `mathjax` 选项来启用 Mathjax：

```toml
math = true
mathjax = true
```

## 示例

当 \\(a \ne 0\\) 时，\\(ax^2 + bx + c = 0\\) 有两个解：
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$