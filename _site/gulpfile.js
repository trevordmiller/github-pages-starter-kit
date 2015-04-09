//////////////////////////////////////////////////
// VARS
//////////////////////////////////////////////////

// IMPORTS

var cp = require('child_process'),
	gulp = require('gulp'),
	util = require('gulp-util'),
	plumber = require('gulp-plumber'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	sass = require('gulp-sass'),
	cmq = require('gulp-combine-media-queries'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	stylish = require('jshint-stylish'),
	jshint = require('gulp-jshint'),
	moduleTranspiler  = require('gulp-es6-module-transpiler'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	browserSync = require('browser-sync');

// PATHS

var distFolder = './public/dist/',
	mainStyleFile = './public/src/main.scss',
	componentStyleFiles = './public/src/components/**/*.scss',
	themeStyleFiles = './public/src/theme/**/*.scss',
	srcStyleFiles = [
		mainStyleFile,
		componentStyleFiles,
		themeStyleFiles
	],
	mainScriptFile = './public/src/main.js',
	componentScriptFiles = './public/src/components/**/*.js',
	srcScriptFiles = [
		mainScriptFile,
		componentScriptFiles
	],
	srcImageFiles = [
		'./public/src/images/**/*.{gif,jpg,png,svg}'
	],
	srcFontFiles = [
		'./public/src/fonts/**/*.{ttf,woff,eot,svg}'
	],
	srcMarkdownFiles = [
		'!_site/**/*',
		'*/*.html',
		'*/*.md',
		'_includes/*.html',
		'_layouts/*.html',
		'_posts/*.md',
		'_config.yml'
	];

// ERRORS

var onError = function (err) {
	var errorMessage = '';
	util.beep();
	errorMessage += util.colors.red('\n-----------------------------------');
	errorMessage += util.colors.red('\n' + err.message);
	errorMessage += util.colors.red('\n-----------------------------------');
	console.log(errorMessage);
	this.emit('end');
};
var customSassError = function (err) {
	var errorMessage = '';

	util.beep();

	errorMessage += util.colors.red('\n-----------------------------------');
	errorMessage += util.colors.red('\n' + err.file);
	errorMessage += util.colors.red('\n' + err.message);
	errorMessage += util.colors.red('\nline: ' + err.line + ' col: ' + err.column);
	errorMessage += util.colors.red('\n-----------------------------------');
	errorMessage += '\n';

	console.log(errorMessage);
};



//////////////////////////////////////////////////
// TASKS
//////////////////////////////////////////////////

// GENERAL

gulp.task('assets', ['styles', 'scripts', 'images', 'fonts']);
gulp.task('default', ['assets', 'markdown']);
gulp.task('serve', ['default', 'browser-sync', 'watch']);

// STYLES

gulp.task('styles', function () {
	return gulp.src(mainStyleFile)
		.pipe(plumber({errorHandler: onError}))
		.pipe(sourcemaps.init())
		.pipe(sass({onError: customSassError}))
		.pipe(concat('all.min.css'))
		.pipe(cmq())
		.pipe(autoprefixer({browsers: ['last 2 versions']}))
		.pipe(minifyCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(distFolder))
		.pipe(gulp.dest('_site/public/dist/'));
});

// SCRIPTS

gulp.task('scripts', function(){
	return gulp.src(srcScriptFiles)
		.pipe(plumber({errorHandler: onError}))
		.pipe(sourcemaps.init())
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter(stylish))
		.pipe(jshint.reporter('fail'))
		.pipe(moduleTranspiler({formatter: 'bundle'}))
		.pipe(babel())
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(distFolder))
		.pipe(gulp.dest('_site/public/dist/'));
});

// IMAGES

gulp.task('images', function (){
	return gulp.src(srcImageFiles)
		.pipe(plumber({errorHandler: onError}))
		.pipe(imagemin())
		.pipe(gulp.dest(distFolder + 'images'));
});

// FONTS

gulp.task('fonts', function() {
	return gulp.src(srcFontFiles)
		.pipe(plumber({errorHandler: onError}))
		.pipe(gulp.dest(distFolder + 'fonts'));
});

// MARKDOWN

gulp.task('markdown', ['assets'], function (done) {
	return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
		.on('close', done);
});

// BROWSERSYNC

gulp.task('browser-sync', ['default'], function() {
	browserSync({
		server: {
			baseDir: '_site'
		},
		open: 'ui'
	});
});

// WATCH

gulp.task('watch', ['default'], function () {
	gulp.watch(srcStyleFiles, ['styles', browserSync.reload]);
	gulp.watch(srcScriptFiles, ['scripts', browserSync.reload]);
	gulp.watch(srcImageFiles, ['images', browserSync.reload]);
	gulp.watch(srcFontFiles, ['fonts', browserSync.reload]);
	gulp.watch(srcMarkdownFiles, ['markdown', browserSync.reload]);
});
