const gulp = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();


const { src, series, parallel, dest } = require('gulp');

function server() {
    browserSync.init({
        server: {
            baseDir: "./public/"
        }
    });
}


const jsPath = 'src/js/**/*.js';

function copyHtml() {
    return src('src/**/*.html').pipe(gulp.dest('dist'));
}

function jsTask() {
    return src(jsPath)
      .pipe(sourcemaps.init())
      .pipe(concat('all.js'))
      .pipe(terser())
      .pipe(sourcemaps.write('.'))
      .pipe(dest('dist/js'));

}

// function cssTask() {
//     return src(cssPath)
//       .pipe(sourcemaps.init())
//       .pipe(concat('style.css'))
//       .pipe(postcss([autoprefixer(), cssnano()]))
//       .pipe(sourcemaps.write('.'))
//       .pipe(dest('dist/css'));
// }

// exports.cssTask = cssTask;

function scss() {
    return src('src/css/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(
            { outputStyle: 'compressed' }
        ).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('dist/css/'))
        .pipe(browserSync.stream());
}

exports.scss = scss;
exports.jsTask = jsTask;
exports.server = server;
exports.copyHtml = copyHtml;
exports.default = copyHtml;

exports.default = parallel(copyHtml, jsTask, server);