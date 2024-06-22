#!/usr/local/bin/node

// node process.js file.md path/to/file.md

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

// process each input
const pages = []
const index = []

process.argv.slice(2).forEach(p => {

  // table of contents
  const toc = []

  const renderer = new marked.Renderer()

  renderer.heading = function (t) {
    const anchor = "#" + t.text.toLowerCase().replace(/[^\w]+/g, "-")
    toc.push({ anchor: anchor, level: t.depth, text: t.text })
    return `<h${t.depth} id="${anchor}">${t.text}</h${t.depth}>\n`
  }

  marked.setOptions({ renderer: renderer })

  // input
  const t = fs.readFileSync(p, "utf8")

  // converted
  const desc = frontmatter(t)
  const html = marked.parse(desc.body)
  const meta = desc.attributes
  const mini = minify(html, minifyOptions)
  const path = p.replace(/.md$/, ".html")
  const text = HTMLParser.parse(html).structuredText

  // stored
  pages.push({
    html: mini,
    meta: meta,
    path: path,
    text: text,
    title: p.replace(/.md$/, ""),
    toc: toc
  })

  index.push({ path: path, text: text })

})

// output
pages.forEach(page => fs.writeFileSync(page.path, page.html))
fs.writeFileSync("index.json", JSON.stringify(index))
