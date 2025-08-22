
这篇文章提供了可以在 Hugo 内容文件中使用的基本 Markdown 语法示例，同时展示了 Hugo 主题中基本 HTML 元素的 CSS 装饰效果。

<!--more-->

## 标题

以下 HTML `<h1>`—`<h6>` 元素代表六个级别的分节标题。`<h1>` 是最高分节级别，而 `<h6>` 是最低级别。

# H1

## H2

### H3

#### H4

##### H5

###### H6

## 段落

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## 引用块

引用块元素表示从另一个来源引用的内容，可选地带有引用，引用必须在 `footer` 或 `cite` 元素内，并且可选地带有内联更改，如注释和缩写。

#### 无归属的引用块

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **注意**：你可以在引用块内使用 _Markdown 语法_。

#### 带归属的引用块

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: 上面的引用摘录自 Rob Pike 在 2015年11月18日 Gopherfest 期间的[演讲](https://www.youtube.com/watch?v=PAAkCSZUG1c)。

## 表格

表格不是核心 Markdown 规范的一部分，但 Hugo 开箱即用地支持它们。

| 姓名  | 年龄 |
| ----- | --- |
| Bob   | 27  |
| Alice | 23  |

#### 表格内的内联 Markdown

| 斜体   | 粗体     | 代码   |
| --------- | -------- | ------ |
| _斜体_ | **粗体** | `代码` |

## 代码块

#### 使用反引号的代码块

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

#### 用四个空格缩进的代码块

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

#### 使用 Hugo 内部高亮短代码的代码块

{{< highlight html >}}

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

#### 带高亮行的代码块

```html {hl_lines=[4,5,8]}
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## 列表类型

#### 有序列表

1. 第一项
2. 第二项
3. 第三项

#### 无序列表

- 列表项
- 另一项
- 还有一项

#### 嵌套列表

- 水果
  - 苹果
  - 橙子
  - 香蕉
- 乳制品
  - 牛奶
  - 奶酪

## 其他元素 — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> 是一种位图图像格式。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

按 <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> 结束会话。

大多数<mark>蝾螈</mark>都是夜行动物，以昆虫、蠕虫和其他小动物为食。