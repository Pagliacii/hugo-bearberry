---
author: Hugo Authors
title: Math Typesetting via Mathjax
date: 2024-01-14T00:00:00.000Z
description: Using Mathjax to render mathematical notations
math: true
mathjax: true
---

Mathematical notation in a Hugo project can be enabled by using third party JavaScript libraries.

<!--more-->

## Configuration

You can enable Mathjax by using the `mathjax` option in your site's configuration file or in the front matter:

```toml
math = true
mathjax = true
```

## Example

When \\(a \ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
