var gulp = require('gulp');
var minify = require('minify');

gulp.task('default', ['watchApp'], function () {
    return console.log('gulp is running');
});



gulp.task('moveFiles', function () {
    return gulp.src('dev/**.*').pipe(gulp.dest('dist'));
});

gulp.task('watchApp', function () {
    gulp.watch('dev/app.js', ['log'])
});

gulp.task('minifyingJS', function () {

});


gulp.task('log', function () {
    console.log('file has been changed')
});

// gulp.task("log", function () {
//     return console.log('gulp is loggin');
// });


// gulp.task('task1', function () {
//     var a = 1,
//         b = 2;
//     console.log(a + b);
//     console.log('task1 실행완료');
// });

// gulp.task('task2', ['task1'], function () {
//     console.log('task2 실행');
// });

// gulp.task('build', ['array', 'of', 'task', 'names']);