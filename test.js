'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var generate = require('generate');
var npm = require('npm-install-global');
var del = require('delete');
var generator = require('./');
var app;

var cwd = path.resolve.bind(path, __dirname, 'actual');

function exists(name, cb) {
  return function(err) {
    if (err) return cb(err);
    var filepath = cwd(name);
    fs.stat(filepath, function(err, stat) {
      if (err) return cb(err);
      assert(stat);
      del(path.dirname(filepath), cb);
    });
  };
}

describe('generate-appveyor', function() {
  if (!process.env.CI && !process.env.TRAVIS && !process.env.APPVEYOR) {
    before(function(cb) {
      npm.maybeInstall('generate', cb);
    });
  }

  beforeEach(function() {
    app = generate({silent: true});
    app.cwd = cwd();
    app.option('dest', cwd());

    // pre-populate template data to avoid prompts from `ask` helper
    app.option('askWhen', 'not-answered');
    app.data({
      author: {
        name: 'Brian Woodward',
        username: 'doowb',
        url: 'https://github.com/doowb'
      },
      project: {
        name: 'foo',
        description: 'bar',
        version: '0.1.0'
      }
    });
  });

  describe('plugin', function() {
    it('should only register the plugin once', function(cb) {
      var count = 0;
      app.on('plugin', function(name) {
        if (name === 'generate-appveyor') {
          count++;
        }
      });
      app.use(generator);
      app.use(generator);
      app.use(generator);
      assert.equal(count, 1);
      cb();
    });

    it('should extend tasks onto the instance', function() {
      app.use(generator);
      assert(app.tasks.hasOwnProperty('default'));
      assert(app.tasks.hasOwnProperty('appveyor'));
    });

    it('should run the `default` task with .build', function(cb) {
      app.use(generator);
      app.build('default', exists('appveyor.yml', cb));
    });

    it('should run the `default` task with .generate', function(cb) {
      app.use(generator);
      app.generate('default', exists('appveyor.yml', cb));
    });

    it('should run the `appveyor` task with .build', function(cb) {
      app.use(generator);
      app.build('appveyor', exists('appveyor.yml', cb));
    });

    it('should run the `appveyor` task with .generate', function(cb) {
      app.use(generator);
      app.generate('appveyor', exists('appveyor.yml', cb));
    });
  });

  if (!process.env.CI && !process.env.TRAVIS && !process.env.APPVEYOR) {
    describe('generator (CLI)', function() {
      it('should run the default task using the `generate-appveyor` name', function(cb) {
        app.use(generator);
        app.generate('generate-appveyor', exists('appveyor.yml', cb));
      });

      it('should run the default task using the `appveyor` generator alias', function(cb) {
        app.use(generator);
        app.generate('appveyor', exists('appveyor.yml', cb));
      });
    });
  }

  describe('generator (API)', function() {
    it('should run the default task on the generator', function(cb) {
      app.register('appveyor', generator);
      app.generate('appveyor', exists('appveyor.yml', cb));
    });

    it('should run the `appveyor` task', function(cb) {
      app.register('appveyor', generator);
      app.generate('appveyor:appveyor', exists('appveyor.yml', cb));
    });

    it('should run the `default` task when defined explicitly', function(cb) {
      app.register('appveyor', generator);
      app.generate('appveyor:default', exists('appveyor.yml', cb));
    });
  });

  describe('sub-generator', function() {
    it('should work as a sub-generator', function(cb) {
      app.register('foo', function(foo) {
        foo.register('appveyor', generator);
      });
      app.generate('foo.appveyor', exists('appveyor.yml', cb));
    });

    it('should run the `default` task by default', function(cb) {
      app.register('foo', function(foo) {
        foo.register('appveyor', generator);
      });
      app.generate('foo.appveyor', exists('appveyor.yml', cb));
    });

    it('should run the `appveyor:default` task when defined explicitly', function(cb) {
      app.register('foo', function(foo) {
        foo.register('appveyor', generator);
      });
      app.generate('foo.appveyor:default', exists('appveyor.yml', cb));
    });

    it('should run the `appveyor:appveyor` task', function(cb) {
      app.register('foo', function(foo) {
        foo.register('appveyor', generator);
      });
      app.generate('foo.appveyor:appveyor', exists('appveyor.yml', cb));
    });

    it('should work with nested sub-generators', function(cb) {
      app
        .register('foo', generator)
        .register('bar', generator)
        .register('baz', generator)

      app.generate('foo.bar.baz', exists('appveyor.yml', cb));
    });
  });
});
