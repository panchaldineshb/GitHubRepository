var gulp = require('gulp'),
        gutil = require('gulp-util'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat');
//gulp.task('makejs', function () {
//    // main app js file
//    gulp.src(['./Scripts/*.js', './Scripts/Directive/*.js', './Scripts/SessionController/*.js', './Scripts/Session-Service/*.js'])
//            .pipe(uglify())
//            .pipe(concat("app.min.js"))
//            .pipe(gulp.dest('./Scripts/'));
//});
gulp.task('makelibjs', function () {
    gulp.src('./Scripts/lib/*.js')
            .pipe(uglify())
            .pipe(concat("app.min.lib.js"))
            .pipe(gulp.dest('./Scripts/lib/'));
});