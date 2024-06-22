#!/usr/local/bin/node

// node process.js tests.md

const fs = require("node:fs")

const frontmatter = require("front-matter")
const highlight = require("highlight.js")
const HTMLParser = require("fast-html-parser")
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

renderer.heading = function (t) {
  const anchor = "#" + t.text.toLowerCase().replace(/[^\w]+/g, "-")
  toc.push({ anchor: anchor, level: t.depth, text: t.text })
  return `<h${t.depth} id="${anchor}">${t.text}</h${t.depth}>\n`
}

marked.setOptions({ renderer: renderer })

// input
const text = fs.readFileSync(process.argv[2], "utf8")

// output
const toc = []

const desc = frontmatter(text)
const html = marked.parse(desc.body)
const json = { title: process.argv[2].replace(/.md$/, ""), text: HTMLParser.parse(html).structuredText }
const meta = desc.attributes
const mini = minify(html, minifyOptions)

process.stdout.write(mini)
process.stderr.write(JSON.stringify(json))
