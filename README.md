# Hinode Module - Template

<!-- Tagline -->
<p align="center">
    <b>A template to define a Hugo module compatible with Hinode</b>
    <br />
</p>

<!-- Badges -->
<p align="center">
    <a href="https://gohugo.io" alt="Hugo website">
        <img src="https://img.shields.io/badge/generator-hugo-brightgreen">
    </a>
    <a href="https://gethinode.com" alt="Hinode theme">
        <img src="https://img.shields.io/badge/theme-hinode-blue">
    </a>
    <a href="https://github.com/anoduck/mod-alwaysdark/commits/main" alt="Last commit">
        <img src="https://img.shields.io/github/last-commit/anoduck/mod-alwaysdark.svg">
    </a>
    <a href="https://github.com/anoduck/mod-alwaysdark/issues" alt="Issues">
        <img src="https://img.shields.io/github/issues/anoduck/mod-alwaysdark.svg">
    </a>
    <a href="https://github.com/anoduck/mod-alwaysdark/pulls" alt="Pulls">
        <img src="https://img.shields.io/github/issues-pr-raw/anoduck/mod-alwaysdark.svg">
    </a>
    <a href="https://github.com/anoduck/mod-alwaysdark/blob/main/LICENSE" alt="License">
        <img src="https://img.shields.io/github/license/anoduck/mod-alwaysdark">
    </a>
</p>

## About

![Logo](https://raw.githubusercontent.com/gethinode/hinode/main/static/img/logo.png)

Hinode is a clean blog theme for [Hugo][hugo], an open-source static site generator. Hinode is available as a
[template][repository_template], and a [main theme][repository]. <!-- This repository maintains a Hugo module to add
[module][module] to a Hinode site. --> Visit the Hinode documentation site for [installation instructions][hinode_docs].


### Mod-AlwaysDark

Hinode is pretty incredible as it is, and as we all know, allows users to choose between viewing the website in either
dark or light mode. But, what if you wanted to force your website to remain in dark mode permanently? You would either
have to tinker with hinode's sass configuration and create your own color scheme, or you would have to run a little
javascript in the background and allow javascript to toggle on the dark mode feature for you every time. We preferred
the latter choice, so we hacked away and created a module to do this.

## Contributing

This module uses [semantic-release][semantic-release] to automate the release of new versions. The package uses `husky`
and `commitlint` to ensure commit messages adhere to the [Conventional Commits] [conventionalcommits] specification. You
can run `npx git-cz` from the terminal to help prepare the commit message.

## Configuration

You will need to have dark mode enabled in `config/_default/params.toml` by setting `enableDarkMode = true`.

<!-- MARKDOWN LINKS -->
[hugo]: https://gohugo.io
[hinode_docs]: https://gethinode.com
<!-- [module]: https://example.com -->
[repository]: https://github.com/gethinode/hinode.git
[repository_template]: https://github.com/gethinode/template.git
[conventionalcommits]: https://www.conventionalcommits.org
[husky]: https://typicode.github.io/husky/
[semantic-release]: https://semantic-release.gitbook.io/
