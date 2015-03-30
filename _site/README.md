# GitHub Pages Starter Kit

_An opinionated starter kit for GitHub Pages projects. For building lightweight static sites customized with a modern build beyond what Jekyll offers by default._

---

## Out-of-the-box

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
0. Clone this project.
0. Run `npm install` and `bower install` to get dependencies.
0. Run `npm start`. This will run all of the gulp tasks (super fast), then run the jekyll build (painfully slow), then launch a live reloading BrowserSnc server for quick development. You may need to kill and re-run `npm start` if you add a new directory/file to the project.

---

## Customize

### Required

- `_config.yml`.
- Images and favicons in `public/src/images/`; I highly recommend using [realfavicongenerator](http://realfavicongenerator.net/) as the `favicons` folder it gives you can completely replace the default `public/images/favicons` and the HTML is already in place; otherwise, you would need to tweak the `_includes/favicons.html`.
- Update the home page(`index.html`).
- Add/update other pages in `*/index.html` (including the default "About" page).
- Add/update components in `public/src/components/` which are imported into `main.js` and `main.scss` and liquid templates in pages, `_includes` and `_layouts` depending on the file type(s) used.

### Optional

- Add/update icons to `public/src/fonts/icomoon/fonts/*` and the related `$icons` Sass map in `public/src/components/icons/_icons.scss`.
- Google Webmaster verification: update and uncomment the related line in `_includes/head.html`. 
- Google analytics: update and uncomment the related lines in `public/src/components/analytics/_analytics.js`.
- If you want a custom domain, follow [GitHub's instructions](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/).
- If you want a blog, just add `.md` posts to the `_posts/` directory and they will show up at `/blog` See [Jekyll's docs](http://jekyllrb.com/) for more info and customizations.

Happy coding :)

---

## Contributing

Feel free to submit pull requests, just make sure to bump the [semver](http://semver.org/) version with `npm version` and `git push --tags` ;)

---

Built with ♡ by [@trevordmiller](http://trevordmiller.com/)