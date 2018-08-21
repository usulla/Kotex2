'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function() {
    return gulp.src('./src/css/output.css', { read: false })
        .pipe(clean());
});
gulp.task('sass', function() {
    // gulp.src('./src/sass/**/*.scss')
    gulp.src('./src/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('js:concat', function() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('output.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/temp'));
});
gulp.task('css:concat', function() {
    return gulp.src('./src/css/*.css')
        .pipe(concat('output.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('./src/css'));
});

gulp.task('autoprefixer', () =>
    gulp.src('./src/css/*.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./src/css'))
);
gulp.task('default', () =>
    gulp.src('./src/css/*.css')
    .pipe(autoprefixer())
    .pipe(concat('output.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('./src/css'))
);

gulp.task('watch', function() {
    gulp.watch('./src/sass/style.scss', ['sass', 'css:concat']);
    gulp.watch('js/*.js', ['js:concat']);
});