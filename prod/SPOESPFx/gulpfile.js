const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const babelify = require('babelify');
const build = require('@microsoft/sp-build-web');

build.addSuppression(
  `Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`
);

build.initialize(gulp);

exports.buildClassicalApp = function () {
  return (
    browserify({
      basedir: '.',
      debug: true,
      entries: ['src/classical-App/index.ts'],
    })
      .plugin(tsify)
      .transform(babelify, {
        global: true,
        presets: [
          [
            '@babel/preset-env',
            {
              targets: '> 0.2%',
              loose: true,
            },
          ],
        ],
        extensions: ['.ts', '.js'],
      })
      .bundle()
      .pipe(source('NextlabsInject.js'))
      // .pipe(buffer())
      // .pipe(uglify({
      //   ie8: true
      // }))
      .pipe(gulp.dest('../SPOLE/SPOLEWeb/Scripts'))
  );
};
