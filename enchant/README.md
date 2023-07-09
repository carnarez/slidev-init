**Spellcheck via [`enchant`](https://github.com/AbiWord/enchant).** Underlying are
`aspell`, `hunspell` and `nuspell` installed, and used in this order of priority by
`enchant`; the English dictionary is the only one provided.

The output format is somewhat derived from [`ispell`](https://manpages.org/ispell):

```text
M 441 28 polars Polaris, poplars, polar, pillars, Poles, poles, molars, pols, Pol's, plays
```

can be read as a _near miss_ (identified as `M`; other values could be `G` for _guess_
and `U` for _unknown_) at line 441 and _position_ 28; the doubtful word is in this case
_polars_ and the related suggestions are following this latter. Note that only the first
ten suggestions are reported to limit the size of the output.
