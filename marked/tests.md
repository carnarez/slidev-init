This page stands as an example of supported Markdown-to-HTML processing. Plenty more details and variants available, check respective documentations.

# Blockquote with alerts

> [!NOTE] 
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT] 
> Crucial information necessary for users to succeed.

> [!WARNING] 
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

# Emphasis

*This text should be italic.* _This should also be italic._

**This text should be bold.** __This should also be bold.__

One **can** _combine_ all ~them~ emphases.

# Equation

Rendered via [`KaTeX`](https://katex.org/); `$$` and `$` notations are supported.

## Block

$$E = m \, c^{2}$$

$$
\begin{aligned}
3x^{2} + 9y &= 3i - 6z \\
3(x^{2} + 3y) &= 3(i - 2z) \\
x^{2} + 3y &= i - 2z
\end{aligned}
$$

$$f(x) = \int_{-\infty}^{+\infty} \hat{f}(\xi) \, e^{2 \pi i \xi x} \, d\xi$$

## Inline

And here is an inline equation: $2 \pi i \xi x$.

# Footnote

Rendered via the `footnotes` extension.[^1]

[^1]: See [this link]().

# Image

![Polars Python Logo](https://raw.githubusercontent.com/pola-rs/polars-static/master/web/polars-logo-python.svg)

# Inline code

Inline code blocks such as `import polars as pl` are not highlighted.

# Link

[GitHub Docs](https://docs.github.com/)

# List

## Ordered

1. Item 1
1. Item 2
    1. Item 2a
    1. Item 2b

## Unordered

* Item
* Item
    * Subitem
    * Subitem

# Markown-in-HTML

<details>
  <summary><code>code.js</code></summary>

Quite the ~complicated~ example:

```javascript
const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')
}
```

</details>

# Syntax highlighting

Rendered via [`highlight.js`](https://highlightjs.org/).

```python
import polars as pl

q = (
    pl.scan_csv("iris.csv")
    .filter(pl.col("sepal_length") > 5)
    .groupby("species")
    .agg(
      pl.all().sum()
    )
)

df = q.collect()
```

# Table

Rendered via the [`tables`](https://python-markdown.github.io/extensions/tables/) extension.

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
$2 \pi r^{2}$ | With inline equation
