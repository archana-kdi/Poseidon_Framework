var args = require('yargs').alias('r', 'release').argv;
var config = require('./gulpfile.config')();
var gulp = require('gulp');
var listing = require('gulp-task-listing');
var sequence = require('gulp-sequence');

var publish = require('poseidon-gulp-publish');
var styles = require('poseidon-gulp-styles');
var log = require('poseidon-gulp-log');
var templates = require('poseidon-gulp-templates');
var typescript = require('poseidon-gulp-typescript');
var bundle = require('poseidon-gulp-bundle');
var scripts = require('poseidon-gulp-scripts');

gulp.task('default', ['help']);

gulp.task('help', listing);

if (args.release) {
    gulp.task("build", function (callback) {
        sequence(['compile:styles', 'compile:templates', 'compile:typescript', 'bundle:dependencies', 'generate:database-scripts'],
            ['optimize'],
            callback);
    });
}
else {
    gulp.task("build", function (callback) {
        sequence(['compile:styles', 'compile:templates', 'compile:typescript', 'bundle:dependencies', 'generate:database-scripts'],
            callback);
    });
}

gulp.task('watch', ['watch:typescript', 'watch:styles', 'watch:templates']);

gulp.task('clean', ['clean:typescript', 'clean:styles', 'clean:templates', 'clean:dependencies', 'clean:database-scripts']);

// SCSS
{
    gulp.task('compile:styles', ['clean:styles'], function () {
        log('Compiling styles.');

        return styles(config).compile();
    });

    gulp.task('clean:styles', function () {
        log('Cleaning styles');

        return styles(config).clean();
    });

    gulp.task('watch:styles', ['compile:styles'], function () {
        log('Watching style files for changes.');
        return styles(config).watch('compile:styles');
    });
}

// HTML Templates
{
    gulp.task('compile:templates', ['clean:templates'], function () {
        log('Creating AngularJS $templateCache entries');

        return templates(config).compile();
    });

    gulp.task('clean:templates', function () {
        return templates(config).clean();
    });

    gulp.task('watch:templates', ['compile:templates'], function () {
        log('Watching template files for changes.');

        return templates(config).watch('compile:templates');
    });
}

// TypeScript
{
    gulp.task('compile:typescript', ['clean:typescript'], function () {
        return typescript(config).compile();
    });

    gulp.task('clean:typescript', function () {
        return typescript(config).clean();
    });

    gulp.task('watch:typescript', function () {
        return typescript(config).watch('compile:typescript');
    });
}

// Scripts
{
    gulp.task('generate:database-scripts', ['clean:database-scripts'], function () {
        return scripts(config).generate();
    });

    gulp.task('clean:database-scripts', function () {
        return scripts(config).clean();
    });
}

gulp.task('optimize', function () {
    return bundle(config).optimize();
});

gulp.task('bundle:dependencies', ['clean:dependencies'], function () {
    return bundle(config).libraries();
});

gulp.task('clean:dependencies', function () {
    return bundle(config).clean();
});

// Publish
gulp.task('publish', ['build'], function () {
    console.log('publish');
    return publish(config);
});