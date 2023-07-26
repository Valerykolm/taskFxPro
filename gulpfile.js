const { src, dest } = require('gulp');
const { watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();


const buildSass = () => {
  console.log('Компиляция SASS');

  return src('app/scss/*.scss')
    .pipe(sass())
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
}

const browserSyncJob = () => {
  browserSync.init({
    server: "app/"
  });

  watch('app/scss/*.scss', buildSass);
  watch('app/*.html').on('change', browserSync.reload);
};

exports.build = buildSass;
exports.server = browserSyncJob;