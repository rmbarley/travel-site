    var gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      nested = require('postcss-nested'),
      cssImport = require('postcss-import'),
      autoprefixer = require('autoprefixer'),
      mixins = require('postcss-mixins'),
      cssvars = require('postcss-simple-vars');

    gulp.task('styles', function() {
      return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
        .on('error', function(errorInfo) {
        	console.log(errorInfo.toString());
        	this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
    });
