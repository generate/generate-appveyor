'use strict';

var path = require('path');
var isValid = require('is-valid-app');

module.exports = function(app) {
  // returns false if `app` is not an instance of Generate, or `generate-appveyor` is already registered
  if (!isValid(app, 'generate-appveyor')) return;

  /**
   * Generates an `appveyor.yml` file in the current working directory.
   *
   * ```sh
   * $ gen appveyor:appveyor
   * ```
   * @name appveyor:appveyor
   * @api public
   */

  app.task('appveyor', { silent: true }, function(cb) {
    return app.src('appveyor.yml', {cwd: path.resolve(__dirname, 'templates')})
      .pipe(app.dest(app.options.dest || app.cwd));
  });

  /**
   * Alias to enable running the [appveyor](#appveyor) task with the following command:
   *
   * ```sh
   * $ gen appveyor
   * ```
   * @name appveyor:default
   * @api public
   */

  app.task('default', { silent: true }, ['appveyor']);
};
