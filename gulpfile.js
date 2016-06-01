// Tools
var gulp = require('gulp');
var gutil = require("gulp-util");
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var Server = require('karma').Server;

gulp.task('lint', function() {
    var config = {
        browser: true,
        globals: {
            _: false,
            $: false,
            jasmine: false,
            describe: false,
            it: false,
            expect: false,
            beforeEach: false,
            afterEach: false,
            sinon: false
        },
        devel: true
    };

    gulp.src('./src/*.js')
        .pipe(jshint(config))
        .pipe(jshint.reporter('default'));
});


gulp.task('test', function(done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});



