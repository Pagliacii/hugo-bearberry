# ୧ʕ •ᴥ•ʔ୨ Bear Berry

[![github pages](https://github.com/Pagliacii/hugo-bearberry/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/Pagliacii/hugo-bearberry/actions/workflows/gh-pages.yml)
[![MIT license](https://img.shields.io/github/license/Pagliacii/hugo-bearberry)](https://github.com/Pagliacii/hugo-bearberry/blob/main/LICENSE)

## Overview

🐻 🍓 A lightweight [Hugo](https://gohugo.io/) theme based on [Hugo Bear
Cub](https://github.com/clente/hugo-bearcub).

If you want to know more features about **Bear Cub**, click [this](https://github.com/clente/hugo-bearcub).

## Installation

Follow Hugo's [quick start](https://gohugo.io/getting-started/quick-start/) to
create an empty website and then clone **Bear Berry** into the themes directory as
a [Git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules):

```sh
git submodule add https://github.com/Pagliacii/hugo-bearberry themes/hugo-bearberry
```

To finish off, append a line to the site configuration file:

```sh
echo 'theme = "hugo-bearberry"' >> config.toml
```

## Features

- Show the update date, words and reading time in the post page.
- Heading prefix with "#".
- Enable [katex](https://katex.org/) to render math expressions by including `math = true` in a post's [front matter](https://gohugo.io/content-management/front-matter/).
- Use [giscus](https://giscus.app/) as the comment system.
- Use [mermaid.js](https://mermaid.js.org/) to draw diagrams.
- Add copy button and language name for code blocks.
- Add the [back-to-top](https://github.com/vfeskov/vanilla-back-to-top) button at right-bottom corner.
- Use [tocbot](https://github.com/tscanlin/tocbot) to show the table of contents.

## Configuration

**Bear Berry** can be customized with a `hugo.toml` file. Check out the
[configuration](https://github.com/Pagliacii/hugo-bearberry/blob/main/exampleSite/config.toml)
of the [demo](https://pagliacii.github.io/hugo-bearberry/) for more information.

```toml
# Basic config
baseURL = "https://example.com"
theme = "hugo-bearberry"
copyright = "Jason Huang © 2023"
defaultContentLanguage = "en"

# Generate a nice robots.txt for SEO
enableRobotsTXT = true

# Your name. For more information on why this must be a list, see
# https://discourse.gohugo.io/t/site-author-usage/31459/8
[author]
  name = "Jason Huang"

# Setup syntax highlighting without inline styles. For more information about
# why you'd want to avoid inline styles, see
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src#unsafe_inline_styles
[markup]
  [markup.highlight]
    lineNos = true
    lineNumbersInTable = false
    # This allows Bear Berry to use a variation of Dracula that is more accessible
    # to people with poor eyesight. For more information about color contrast
    # and accessibility, see https://web.dev/color-and-contrast-accessibility/
    noClasses = false
  [markup.goldmark]
    [markup.goldmark.renderer]
      # Enable this to allow the raw html in markdown file
      unsafe = true

# Multilingual mode config. More for information about how to setup translation,
# see https://gohugo.io/content-management/multilingual/
[languages]
  [languages.en]
    title = "Bear Berry"
    languageName = "en-US 🇺🇸"
    LanguageCode = "en-US"
    contentDir = "content"
    [languages.en.params]
      madeWith = "Made with [Bear Berry](https://github.com/Pagliacii/hugo-bearberry)"
  [languages.zh]
    title = "熊莓"
    languageName = "zh-CN 🇨🇳"
    LanguageCode = "zh-CN"
    contentDir = "content.zh"
    [languages.zh.params]
      madeWith = "由 [Bear Berry](https://github.com/Pagliacii/hugo-bearberry) 驱动"

[params]
  # The description of your website
  description = "Bear Berry Demo"

  # The path to your favicon
  favicon = "images/favicon.ico"
  favicon16 = "images/favicon-16x16.png"
  favicon32 = "images/favicon-32x32.png"
  apple_touch_icon = "images/apple-touch-icon.png"
  manifest = "images/site.webmanifest"
  safari_pinned_tab = "images/safari-pinned-tab.svg"
  msapplication_tilecolor = "#da532c"
  msapplication_config = "images/browserconfig.xml"
  theme_color = "#fff"

  # These images will show up when services want to generate a preview of a link
  # to your site. Ignored if `generateSocialCard = true`. For more information
  # about previews, see https://gohugo.io/templates/internal#twitter-cards and
  # https://gohugo.io/templates/internal#open-graph
  images = ["images/share.webp"]

  # This title is used as the site_name on the Hugo's internal opengraph
  # structured data template
  title = "Bear Berry"

  # Dates are displayed following the format below. For more information about
  # formatting, see https://gohugo.io/functions/format/
  dateFormat = "2006-01-02"

  # If your blog is multilingual but you haven't translated a page, this theme
  # will create a disabled link. By setting `hideUntranslated` to true, you can
  # have the theme simply not show any link
  hideUntranslated = false

  # (EXPERIMENTAL) This theme is capable of dynamically generating social cards
  # for posts that don't have `images` defined in their front matter; By setting
  # `generateSocialCard` to false, you can prevent this behavior. For more
  # information see layouts/partials/seo_tags.html
  generateSocialCard = true

  # For information about giscus, see https://giscus.app/
  [params.giscus]
    repoName = "<your-repo-name>"
    repoID = "<your-repo-id>"
    category = "<your-discussion-category"
    categoryID = "<your-category-id>"
    # mapping = "pathname"
    # reactionsEnabled = false
    # emitMetadata = false
    # inputPosition = "top"
    # lang = "en"
    # theme = "preferred_color_scheme"

# Social media. Delete any item you aren't using to make sure it won't show up
# in your website's metadata.
[social]
  email = "me@example.com" # Added to the footer so readers can reply to posts
  twitter = "example" # Twitter handle (without '@')
  facebook_admin = "0000000000" # Facebook Page Admin ID
```

## Contributing

If you come across any problems while using **Bear Berry**, you can file an
[issue](https://github.com/Pagliacii/hugo-bearberry/issues) or create a [pull
request](https://github.com/Pagliacii/hugo-bearberry/pulls).
