
在 Hugo 项目中可以通过使用第三方 JavaScript 库来启用数学符号。
<!--more-->

在这个例子中我们将使用 [KaTeX](https://katex.org/)

- 在 `/layouts/partials/math.html` 下创建一个 partial
- 在这个 partial 中引用[自动渲染扩展](https://katex.org/docs/autorender.html)或在本地托管这些脚本。
- 在你的模板中包含这个 partial，如下所示：

```bash
{{ if or .Params.math .Site.Params.math }}
{{ partial "math.html" . }}
{{ end }}
```

- 要全局启用 KaTex，请在项目配置中将参数 `math` 设置为 `true`
- 要按页面启用 KaTex，请在内容文件中包含参数 `math: true`

**注意：** 使用[支持的 TeX 函数](https://katex.org/docs/supported.html)在线参考

{{< math.inline >}}
{{ if or .Page.Params.math .Site.Params.math }}
<!-- KaTeX -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js" integrity="sha384-y23I5Q6l+B6vatafAwxRu/0oK/79VlbSz7Q9aiSZUvyWYIYsd+qj+o24G5ZU2zJz" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js" integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>
{{ end }}
{{</ math.inline >}}

### 示例

{{< math.inline >}}
<p>
行内数学：\(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
</p>
{{</ math.inline >}}

块级数学：
$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$