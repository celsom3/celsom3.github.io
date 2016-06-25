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

var plumber = require('gulp-plumber');
// var sass = require('gulp-sass');
var watch = require('gulp-watch');
// var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
var jade = require('gulp-jade');
var del = require('del');
var livereload = require('gulp-livereload');

var paths = {
  templates: '_harp/public/**/*.{jade,md}',
  css: '_harp/public/assets/css/*.css',
  sass: ['_harp/public/assets/**/*.scss', 'assets/stylesheets/*.scss'],
  images: '_harp/public/assets/img/**/*',
  js: '_harp/public/assets/js/**/*.js',
	harp: '_harp/',
	harpPublic: '_harp/public/'
};


// Live Reload

gulp.task('watch', ['serve'], function() {

  gulp.watch('_harp/public/**/*', function() {
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
	console.log("Just started harp...");

	gulp.watch('_harp/public/**', function() {
		// browserSync.reload();
		console.log("Changes detected");
	});
});

/**
 * Default task
 */
gulp.task('default', ['watch']);
