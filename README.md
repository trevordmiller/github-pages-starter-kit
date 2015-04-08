# GitHub Pages Starter Kit

_An opinionated starter kit for GitHub Pages projects. For building lightweight static sites customized with a modern build beyond what Jekyll offers by default._

---

## Examples

- [Default Starter Kit](http://trevordmiller.github.io/github-pages-starter-kit)
- [Blog](http://www.frontend.tv/)
- [Portfolio](http://www.amyjomiller.com/)

---

## Features

- Blazing fast
	- Pre-generated
	- Passes Google PageSpeed user experience and speed tests on mobile and desktop.
	- Only required production dependencies are **16.4k** from `all.min.css` and **8.4k** from `all.min.js`.
	- GitHub Pages is served with Nginx and automatically gzip's content.
- Built mobile first
- GitHub pages hosting
	- Every GitHub Page is run through Jekyll when you push content to a specially named branch within your repository. For User Pages, use the master branch in your `username.github.io` repository. For Project Pages, use the `gh-pages` branch in your project's repository.
- Jekyll blog and feed
- Componentized architecture
- npm
- Bower
- Gulp
	- Jekyll
	- ES6 / ES2015
		- Babeljs
		- Component modules
		- Sourcemaps
		- Uglify and concat
		- JSHint + `.jshintrc`
	- Sass
		- Via [node-sass](https://www.npmjs.com/package/node-sass) (libsass)
		- Minimal/flat/clean/whatever design
		- BEM components
		- Branded reset
		- Theme
		- Component partials
		- Autoprefixer
		- Sourcemaps
		- Minify and concat
		- Flexbox
		- Custom icomoon icons `selection` and `$icons` Sass map
	- Responsive offscreen vanilla nav
	- BrowserSync
	- `.editorconfig`
- Support in all modern browsers and devices; CSS and JS will break on IE < 9 (with a banner encouraging the user to upgrade their browser).

---

## Getting Started

0. Install [Node + npm](https://nodejs.org/).
0. Download this project.
0. Run `npm install` and `bower install` to get dependencies.
0. Run `gulp serve`. This will run all of the gulp tasks (super fast), then run the jekyll build (takes a bit), then launch a live reloading BrowserSnc server for quick development. You may need to kill and re-run `gulp serve` if you add a new directory/file to the project.

Congrats! You have a running project ;)

#### Required Customizations

- `_config.yml`.
- Images and favicons in `public/src/images/`; I highly recommend using [realfavicongenerator](http://realfavicongenerator.net/) as the `favicons` folder it gives you can completely replace the default `public/images/favicons` and the HTML is already in place; otherwise, you would need to tweak the `_includes/favicons.html`.
- Update the home page(`index.html`).
- Add/update other pages in `*/index.html` (including the default "About" page).
- Add/update components in `public/src/components/` which are imported into `main.js` and `main.scss` and liquid templates in pages, `_includes` and `_layouts` depending on the file type(s) used.

#### Optional Customizations

- Update the `README.md`.
- Add/update icons to `public/src/fonts/icomoon/fonts/*` and the related `$icons` Sass map in `public/src/components/icons/_icons.scss`.
- Google Webmaster verification: update and uncomment the related line in `_includes/head.html`. 
- Google analytics
	- add your `googleAnalyticsID` in `public/src/components/analytics/_analytics.js`
	- uncomment the import and init lines in `pulic/src/main.js`.
- If you want a custom domain, follow [GitHub's instructions](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/).
	1. Add a `CNAME` file to the project root with a single line: `www.yourdomain.com`.
	1. Change your `CNAME` record with your domain manager to point to `yourproject.github.io` so that going to `www.yourdomain.com` works.
	1. Changing/adding two A records to point to `192.30.252.153` and `192.30.252.154` so that going to `yourdomain.com` (no `www`) also works.
- If you want a blog, just add `.md` posts to the `_posts/` directory and they will show up at `/blog` See [Jekyll's docs](http://jekyllrb.com/) for more info and customizations.

---

## Contributing

Feel free to submit pull requests, just make sure to bump the [semver](http://semver.org/) version with `npm version` and `git push --tags` ;)

---

Built with ♡ by [@trevordmiller](http://trevordmiller.com/)
