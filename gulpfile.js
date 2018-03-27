const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

// Logs message
gulp.task('message', function(){
  return console.log('Gulp is running...');
});

// Copy All HTML files
gulp.task('copyHTML', function(){
  gulp.src('src/*.html')
      .pipe(gulp.dest('dist'));
});

// Optimize Images
gulp.task('imagemin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

// Minify js
gulp.task('minify', function(){
  gulp.src('src/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

//Compile sass
gulp.task('sass', function(){
  gulp.src('src/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['message', 'copyHTML', 'imagemin', 'minify', 'sass']);

gulp.task('watch', function(){
  gulp.watch('src/js/*.js', ['minify']);
  gulp.watch('src/images/*', ['imagemin']);
  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copyHTML']);
});
