**Render Markdown to HTML via [`marked`](https://marked.js.org/).** Includes a few
extensions by default:

* [Alerts](https://github.com/bent10/marked-extensions/tree/main/packages/alert)
* [Equations](https://github.com/UziTech/marked-katex-extension) (via `KaTeX`)
* [Footnotes](https://github.com/bent10/marked-extensions/tree/main/packages/footnote)
* [GFM heading IDs](https://github.com/markedjs/marked-gfm-heading-id)
* [Syntax highlight](https://github.com/markedjs/marked-highlight) (via `highlight.js`)

As well as a crude text extractor to prepare content to be indexed via `Lunr` (via
`fast-html-parser`), and a HTML minifier (via `html-minifier`).
