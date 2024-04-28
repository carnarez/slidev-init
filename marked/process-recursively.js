#!/usr/local/bin/node

// node process.js file.md path/to/file.md

const fs = require("node:fs")

const frontmatter = require("front-matter")
const highlight = require("highlight.js")
const HTMLParser = require("fast-html-parser")
const lunr = require("lunr")
const Marked = require("marked").Marked
const markedAlert = require("marked-alert")
const markedFootnote = require("marked-footnote")
const markedHeading = require("marked-gfm-heading-id").gfmHeadingId
const markedHighlight = require("marked-highlight").markedHighlight
const markedKatex = require("marked-katex-extension")
const minify = require("html-minifier").minify

const katexOptions = {
  delimiters: [
    { left: "$$", right: "$$", display: true },
    { left: "$", right: "$", display: false },
  ],
  throwOnError: false
}

const minifyOptions = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true
}

// markdown-to-html
const marked = new Marked(
  markedHighlight({
    highlight(code, lang, info) {
      const language = highlight.getLanguage(lang) ? lang : "plaintext"
      return highlight.highlight(code, { language }).value
    }
  })
)
.use(markedAlert())
.use(markedFootnote())
.use(markedHeading())
.use(markedKatex(katexOptions))

// table of contents
const renderer = new marked.Renderer()

renderer.heading = function (text, level, raw) {
  const anchor = "#" + raw.toLowerCase().replace(/[^\w]+/g, "-")
  toc.push({ anchor: anchor, level: level, text: text })
  return `<h${level} id="${anchor}">${text}</h${level}>\n`
}

marked.setOptions({ renderer: renderer })

// process each input
const pages = []

process.argv.slice(2).forEach(path => {
  let text = fs.readFileSync(path, "utf8")

  let toc = []

  let desc = frontmatter(text)
  let html = marked.parse(desc.body)
  let meta = desc.attributes
  let mini = minify(html, minifyOptions)

  pages.push({
    html: mini,
    meta: meta,
    path: path.replace(/.md$/, ".html"),
    text: HTMLParser.parse(html).structuredText,
    title: path.replace(/.md$/, ""),
    toc: toc
  })
})

// pre-build lunr index
const index = lunr(function () {
  ["title", "text"].forEach(f => this.field(f), this)
  this.ref("path")
  pages.forEach(d => this.add(d), this)
})

// output
pages.forEach(page => fs.writeFileSync(page.path, page.html))
fs.writeFileSync("index.json", JSON.stringify(index))
