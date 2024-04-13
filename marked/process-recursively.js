#!/usr/local/bin/node

// node process.js tests.md

const fs = require("node:fs")
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

const pages = []

process.argv.slice(2).forEach(path => {
  s = minify(marked.parse(fs.readFileSync(path, "utf8")), minifyOptions)
  pages.push({
    path: path.replace(/.md$/, ".html"),
    title: path.replace(/.md$/, ""),
    text: HTMLParser.parse(s).structuredText,
    html: s
  })
})

const index = lunr(function () {
  ["title", "text"].forEach(f => this.field(f), this)
  this.ref("path")
  pages.forEach(d => this.add(d), this)
})

pages.forEach(page => fs.writeFileSync(page.path, page.html))
fs.writeFileSync("index.json", JSON.stringify(index))
