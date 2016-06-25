// Defining base pathes
var basePaths = {
    bower: './bower_components/',
    dev: './src/'
};

// Defining requirements
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var harp = require('harp');

//var plumber = require('gulp-plumber');
// var sass = require('gulp-sass');
var watch = require('gulp-watch');
// var cssnano = require('gulp-cssnano');
//var rename = require('gulp-rename');
var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
//var jade = require('gulp-jade');
var del = require('del');
var prettify = require('gulp-prettify');
//var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var rimraf = require('gulp-rimraf');
var clean = require('gulp-clean');

var paths = {
  templates: '_harp/public/**/*.{jade,md}',
  css: '_harp/public/assets/css/*.css',
  sass: ['_harp/public/assets/**/*.scss', 'assets/stylesheets/*.scss'],
  images: '_harp/public/assets/img/**/*',
  js: '_harp/public/assets/js/**/*.js',
	harp: '_harp/',
	harpPublic: '_harp/public/',
	harpCompiled: 'www/'
};


// Live Reload

gulp.task('watch', ['serve'], function() {

  gulp.watch('_harp/**/*', function() {
		reload(paths.harp, {stream: true});
		console.log("Changes detected");
	});
});

/**
 * Serve the Harp Site from the src directory
 */
gulp.task('serve', function () {
  harp.server(paths.harp, {
    port: 3000
  }, function () {
    browserSync({
			files: [
				'public/**.jade,',
				'public/**.json,',
				'public/_partials/**.jade,'
			],
      proxy: "localhost:3000",
      open: true,
      ghostMode: {
        clicks: true,
        forms: false,
        scroll: true
      },
      logLevel: "info",
      notify: true
    });
	});
});

// Compile and prepare for GitHub Pages
gulp.task('compile', function() {
	return harp.compile(paths.harp , paths.harpCompiled, function() {
		// After compiling with harp, move to root directory
		gulp.src('_harp/www/**/*')
			.pipe(plumber())
			.pipe(prettify())
			.pipe(gulp.dest('./'));
		// Now delete all files in /www
		//del('_harp/www/**/*');
		del.sync(['_harp/www']);

	});

	//del.sync(['_harp/www']);



});

gulp.task('clean', ['compile'], function() {
	//return del.sync(['_harp/www/**/*']);


	return gulp.src('_harp/www', {read: false})
	 	.pipe(clean('*', {force:true}));
});

/**
 * Default task
 */
gulp.task('default', ['watch']), function() {};
