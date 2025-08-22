
> 使用代码块在你的 [Hugo](https://gohugo.io/) 站点中嵌入图表的 SVG 图像，使用免费的 [Kroki](https://kroki.io/) 服务。与需要客户端渲染的 JavaScript 解决方案不同，这种方法在页面中嵌入 SVG 图像。[^1]

[^1]: https://www.veriphor.com/articles/diagrams/

感谢 [@jmooring](https://github.com/jmooring) 和 [Kroki](https://kroki.io/)。

## 性能

根据 [@jmooring](https://github.com/jmooring) 的[博客](https://www.veriphor.com/articles/diagrams/#performance)，你可以编辑你的[站点配置](https://gohugo.io/getting-started/configuration/#configure-file-caches)来存储 `getresource` 缓存以优化性能。

```toml
[caches]
  [caches.getresource]
    dir = ":resourceDir/_gen"
    maxAge = -1
```

不要忘记将 `resources` 目录检入源代码控制。

## 图表类型

以下图表类型可用：

- `blockdiag` - [BlockDiag](https://github.com/blockdiag/blockdiag)
- `bpmn` - [BPMN](https://github.com/bpmn-io/bpmn-js)
- `bytefield` - [Bytefield](https://github.com/Deep-Symmetry/bytefield-svg/)
- `seqdiag` - [SeqDiag](https://github.com/blockdiag/seqdiag)
- `actdiag` - [ActDiag](https://github.com/blockdiag/actdiag)
- `nwdiag` - [NwDiag](https://github.com/blockdiag/nwdiag)
- `packetdiag` - [PacketDiag](https://github.com/blockdiag/nwdiag)
- `rackdiag` - [RackDiag](https://github.com/blockdiag/nwdiag)
- `c4plantuml` - [C4 with PlantUML](https://github.com/RicardoNiepel/C4-PlantUML)
- `d2` - [D2](https://github.com/terrastruct/d2)
- `dbml` - [DBML](https://github.com/softwaretechnik-berlin/dbml-renderer)
- `ditaa` - [Ditaa](https://ditaa.sourceforge.net/)
- `erd` - [Erd](https://github.com/BurntSushi/erd)
- `excalidraw` - [Excalidraw](https://github.com/excalidraw/excalidraw)
- `graphviz` - [GraphViz](https://www.graphviz.org/)
- `mermaid` - [Mermaid](https://github.com/knsv/mermaid)
- `nomnoml` - [Nomnoml](https://github.com/skanaar/nomnoml)
- `pikchr` - [Pikchr](https://github.com/drhsqlite/pikchr)
- `plantuml` - [PlantUML](https://github.com/plantuml/plantuml)
- `structurizr` - [Structurizr](https://github.com/structurizr/dsl)
- `svgbob` - [Svgbob](https://github.com/ivanceras/svgbob)
- `symbolator` - [Symbolator](https://github.com/kevinpt/symbolator)
- `tikz` - [TikZ](https://github.com/pgf-tikz/pgf)
- `umlet` - [UMlet](https://github.com/umlet/umlet)
- `vega` - [Vega](https://github.com/vega/vega)
- `vegalite` - [Vega-Lite](https://github.com/vega/vega-lite)
- `wavedrom` - [WaveDrom](https://github.com/wavedrom/wavedrom)
- `wireviz` - [WireViz](https://github.com/formatc1702/WireViz)

## 示例

### D2

````text
```kroki {type=d2}
# Actors
hans: Hans Niemann

defendants: {
  mc: Magnus Carlsen
  playmagnus: Play Magnus Group
  chesscom: Chess.com
  naka: Hikaru Nakamura

  mc -> playmagnus: Owns majority
  playmagnus <-> chesscom: Merger talks
  chesscom -> naka: Sponsoring
}

# Accusations
hans -> defendants: 'sueing for $100M'

# Offense
defendants.naka -> hans: Accused of cheating on his stream
defendants.mc -> hans: Lost then withdrew with accusations
defendants.chesscom -> hans: 72 page report of cheating
```
````

```kroki {type=d2}
# Actors
hans: Hans Niemann

defendants: {
  mc: Magnus Carlsen
  playmagnus: Play Magnus Group
  chesscom: Chess.com
  naka: Hikaru Nakamura

  mc -> playmagnus: Owns majority
  playmagnus <-> chesscom: Merger talks
  chesscom -> naka: Sponsoring
}

# Accusations
hans -> defendants: 'sueing for $100M'

# Offense
defendants.naka -> hans: Accused of cheating on his stream
defendants.mc -> hans: Lost then withdrew with accusations
defendants.chesscom -> hans: 72 page report of cheating
```

### Mermaid

````text
```kroki {type=mermaid flexoki=paper}
sequenceDiagram
  participant Alice
  participant Bob
  Alice->John: Hello John, how are you?
  loop Healthcheck
    John->John: Fight against hypochondria...
  end
  Note right of John: Rational thoughts prevail...
  John-->Alice: Great!
  John->Bob: How about you?
  Bob-->John: Jolly good!
```
````

```kroki {type=mermaid flexoki=paper}
sequenceDiagram
  participant Alice
  participant Bob
  Alice->John: Hello John, how are you?
  loop Healthcheck
    John->John: Fight against hypochondria...
  end
  Note right of John: Rational thoughts prevail...
  John-->Alice: Great!
  John->Bob: How about you?
  Bob-->John: Jolly good!
```

### 更多示例

前往 [Kroki 示例](https://kroki.io/examples.html)页面查看更多内容。

