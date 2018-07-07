'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean'),
    minify = require('gulp-minify');

gulp.task('sass', function () {
    gulp.src('sass/*.scss', {base: 'sass'})
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'})
            .on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('clean', function () {
    return gulp.src('js', {read: false})
        .pipe(clean());
});

gulp.task('compress', function() {
    gulp.src('source/*.js')
        .pipe(minify({
            ext:{
                min:'.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('js'))
});

gulp.task('watch', function () {
    browserSync.init({
        proxy: "acceptic.mysite.local"
    });

    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('*.html', browserSync.reload);
});

gulp.task('default', ['watch']);