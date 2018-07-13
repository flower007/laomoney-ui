const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

// 编译less
gulp.task('css', function () {
    gulp.src('../src/styles/index.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie > 8']
        }))
        .pipe(cleanCSS())
        .pipe(rename('laomoney.css'))
        .pipe(gulp.dest('../dist/styles'));
});

// 拷贝图片文件
// gulp.task('images', function () {
//     gulp.src('../src/images/*.*')
//         .pipe(gulp.dest('../dist/images'));
// });
// gulp.task('default', ['css', 'images']);

gulp.task('default', ['css']);
