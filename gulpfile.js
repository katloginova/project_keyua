const {
    parallel,
    series,
    src,
    dest
} = require('gulp');

const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

function copyHtml() {
    return src('./src/index.html')
        .pipe(dest('./dist'));
}

function copyFonts() {
    return src('./src/fonts/*.*')
        .pipe(dest('./dist/fonts'));
}

function copyImg() {
    return src('./src/img/**/*.*')
        .pipe(dest('./dist/img'));
}

function copyJs() {
    return src('./src/scripts/**/*.js')
        .pipe(concat('script.js'))
        .pipe(dest('./dist/scripts'));
}

function copyJsMin() {
    return src('./src/scripts/**/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(dest('./dist/scripts'));
}

function copyCss() {
    return src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(dest('./dist/styles'));
}


function copyCssMin() {
    return src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(rename({suffix:'.min'}))
        .pipe(dest('./dist/styles'));
}

function copyFontsMin() {
    return src('./src/fonts/*.css')
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(rename({suffix:'.min'}))
        .pipe(dest('./dist/fonts'));
}

module.exports = {
    build: parallel(copyHtml, copyImg, copyJs, copyCss, copyFonts),
    minify: parallel(copyHtml, copyImg, copyJsMin, copyCssMin, copyFontsMin),
};