1. npm sass
2. npm run build
3. npm run live

This is my personal blog. It uses 11ty. Eventually I'll add a backend admin panel.



# eleventy-classic-blog-starter  ![GitHub last commit](https://img.shields.io/github/last-commit/tigersway/eleventy-classic-blog-starter?style=flat-square) ![GitHub issues](https://img.shields.io/github/issues/tigersway/eleventy-classic-blog-starter?style=flat-square)

A starter repository for a classic blog website using the Eleventy SSG.

Of course, a very opiniated one, and a work in progress!

[![Cloudflare](https://img.shields.io/badge/-cloudflare-f38020?style=flat-square&logo=eleventy)](https://eleventy-classic-blog-starter.pages.dev/)
[![Netlify](https://img.shields.io/badge/-netlify-45a2be?style=flat-square&logo=eleventy)](https://eleventy-classic-blog-starter.netlify.app/)
[![Render](https://img.shields.io/badge/-render-46e3b7?style=flat-square&logo=eleventy)](https://eleventy-classic-blog-starter.onrender.com/)
[![Vercel](https://img.shields.io/badge/-vercel-000?style=flat-square&logo=eleventy)](https://eleventy-classic-blog-starter.vercel.app/)
[![Surge](https://img.shields.io/badge/-surge-def1e7?style=flat-square&logo=eleventy)](https://eleventy-classic-blog-starter.surge.sh/)
[![Hostman](https://img.shields.io/badge/-hostman-0959cd?style=flat-square&logo=eleventy)](https://eleventy-classic-blog-starter.hostman.site/)


## Local setup and run
Very classic too...
### Clone & install
```
git clone https://github.com/tigersway/eleventy-classic-blog-starter.git <my-blog-name>
cd <my-blog-name>
npm install
```
### build first, and set live!
```
npm run build
npm run live
```

## Tools

- [Eleventy](https://www.11ty.dev/)
- [Gulp](https://gulpjs.com/)
- [highlight.js](https://highlightjs.org/)
- [@tigersway/gulp-responsive](https://github.com/TigersWay/gulp-responsive) & [gulp-vinyl-flow](https://github.com/TigersWay/gulp-vinyl-flow)

## Themes

- Nunjucks port - but same CSS - based on liquid layouts from [Hyde](https://hyde.getpoole.com/) by [@mdo](https://twitter.com/mdo)

## Problems, notes and sometimes solutions

### Dates!

#### Creation (or Updated) dates

Posts default dates (file creation) are only reliable in local, for you. Depending where you are, they may change during transfer, upload, etc.
Differently but not really better, dates embedded inside the post filename (YYYY-MM-DD) only works in UTC, and will never - if needed - include a time of day.

=> Conclusion: The only valid dates are coming from the "data cascade", from Frontmatter to computed data and work best in their complete form like this: "2020-07-20T13:00:00.000Z" or simplified like this: "2020-07-20 20:00:00 +7".

#### SEO & Automatic link(s) to image(s)

SEO experts are saying you should avoid to set year, month and day in your URL, which means you may have trouble keeping your images with their related post, and in the same time not keeping that "dated" structure for these same markdown document.

=> Conclusion: As you build permalinks, you have to build links to images.

### Responsive

With a little help from [@tigersway/gulp-responsive](https://github.com/TigersWay/gulp-responsive) and [gulp-vinyl-flow](https://github.com/TigersWay/gulp-vinyl-flow), Eleventy can [transform](.eleventy.js#L76-L88) every `img` tag.

### Nunjucks & Fragments

[source](.eleventy.js#L42-L49)

## Bug reports, feature requests... or even stars
This is an ongoing project - even if I don't modify it everyday - and every suggestions and/or contributions are most welcome!

## CHANGELOG

**v0.6.1**
  - First try on "Cloudflare Pages"
  - Added robots.txt 
