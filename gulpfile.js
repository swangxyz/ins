var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var header = require('gulp-header');
var gulpFilter = require('gulp-filter');
var ngAnnotate = require('gulp-ng-annotate');
var templateCache = require('gulp-angular-templatecache');

var banner = ['/**',
    ' * Instagram Demo',
    ' * (c) 2015 Steven Wang',
    ' * License: MIT',
    ' * Last Updated: <%= new Date().toUTCString() %>',
    ' */',
    ''].join('\n');

gulp.task('minify', function() {
   var templateFilter = gulpFilter('client/view/*.html', {restore: true});

    return gulp.src([
        'client/app.js',
        'client/controller/*.js',
        'client/service/*.js',
        'client/directive/*.js'
    ])
        .pipe(templateFilter)
        .pipe(templateCache({ root: 'view', module: 'Ins' }))
        .pipe(templateFilter.restore)
        .pipe(concat('app.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(header(banner))
        .pipe(gulp.dest('client'));
});

gulp.task('watch', function() {
  gulp.watch([
    'client/app.js',
    'client/service/*.js',
    'client/directive/*.js',
    'client/controller/*.js',
    'client/view/*.html'
  ], ['minify']);
});
gulp.task('default', ['watch', 'minify']);