**Render Markdown to HTML via [`marked`](https://marked.js.org/).** Includes a few
extensions by default:

* [Alerts](https://github.com/bent10/marked-extensions/tree/main/packages/alert)
* [Equations](https://github.com/UziTech/marked-katex-extension) (via `KaTeX`)
* [Footnotes](https://github.com/bent10/marked-extensions/tree/main/packages/footnote)
* [GFM heading IDs](https://github.com/markedjs/marked-gfm-heading-id)
* [Syntax highlight](https://github.com/markedjs/marked-highlight) (via `highlight.js`)

As well as a crude text extractor
([`fast-html-parser`](https://github.com/ashi009/node-fast-html-parser)) to prepare
content to be indexed, and a HTML minifier (via
[`html-minifier`](https://github.com/kangax/html-minifier)).
