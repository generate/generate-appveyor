<p align="center">

<a href="https://github.com/generate/generate">
<img height="150" width="150" src="https://raw.githubusercontent.com/generate/generate/master/docs/logo.png">
</a>
</p>

Generate an appveyor.yml file to the cwd or specified directory. Install globally and run with generate's CLI, or use as a component in your own generator.

# generate-appveyor

[![NPM version](https://img.shields.io/npm/v/generate-appveyor.svg?style=flat)](https://www.npmjs.com/package/generate-appveyor) [![NPM downloads](https://img.shields.io/npm/dm/generate-appveyor.svg?style=flat)](https://npmjs.org/package/generate-appveyor) [![Build Status](https://img.shields.io/travis/generate/generate-appveyor.svg?style=flat)](https://travis-ci.org/generate/generate-appveyor)

You might also be interested in [generate-travis](https://github.com/generate/generate-travis).

![generate-appveyor demo](https://raw.githubusercontent.com/generate/generate-appveyor/master/docs/demo.gif)

## tldr

**Install generate**

To use [generate](https://github.com/generate/generate) from the command line, it must first be installed globally with npm:

```sh
$ npm install --global generate
```

**Install `generate-appveyor`**

Next, install this generator:

```sh
$ npm install --global generate-appveyor
```

**Run**

You should now be able to run this generator with the following command:

```sh
$ gen appveyor
```

## Tasks

### [appveyor:appveyor](generator.js#L20)

Generates an `appveyor.yml` file in the current working directory.

**Example**

```sh
$ gen appveyor:appveyor
```

### [appveyor:default](generator.js#L35)

Alias to enable running the [appveyor](#appveyor) task with the following command:

**Example**

```sh
$ gen appveyor
```

## What is "Generate"?

Generate is a command line tool and developer framework for scaffolding out new GitHub projects using [generators](https://github.com/generate/generate/blob/master/docs/generators.md) and [tasks](https://github.com/generate/generate/blob/master/docs/tasks.md).

Answers to prompts and the user's environment can be used to determine the templates, directories, files and contents to build. Support for [gulp](http://gulpjs.com), [base](https://github.com/node-base/base) and [assemble](https://github.com/assemble/assemble) plugins, and much more.

**For more information**:

* Visit the [generate project](https://github.com/generate/generate/)
* Visit the [generate documentation](https://github.com/generate/generate/blob/master/docs/)
* Find [generators on npm](https://www.npmjs.com/browse/keyword/generate-generator) (help us [author generators](https://github.com/generate/generate/blob/master/docs/micro-generators.md))

## Getting started

### Install

**Installing the CLI**

To run the `appveyor` generator from the command line, you'll need to install [Generate](https://github.com/generate/generate) globally first. You can do that now with the following command:

```sh
$ npm install --global generate
```

This adds the `gen` command to your system path, allowing it to be run from any directory.

**Install generate-appveyor**

Install this module with the following command:

```sh
$ npm install --global generate-appveyor
```

### Usage

Run this generator's `default` [task](https://github.com/generate/generate/blob/master/docs/tasks.md#default) with the following command:

```sh
$ gen appveyor
```

**What you should see in the terminal**

If completed successfully, you should see both `starting` and `finished` events in the terminal, like the following:

```sh
[00:44:21] starting ...
...
[00:44:22] finished ✔
```

If you do not see one or both of those events, please [let us know about it](../../issues).

### Help

To see a general help menu and available commands for Generate's CLI, run:

```sh
$ gen help
```

## Tasks

All available tasks.

### [appveyor:appveyor](generator.js#L20)

Generates an `appveyor.yml` file in the current working directory.

**Example**

```sh
$ gen appveyor:appveyor
```

### [appveyor:default](generator.js#L35)

Alias to enable running the [appveyor](#appveyor) task with the following command:

**Example**

```sh
$ gen appveyor
```

Visit Generate's [documentation for tasks](https://github.com/generate/generate/blob/master/docs/tasks.md).

## Next steps

### Running unit tests

It's never too early to begin running unit tests. When you're ready to get started, the following command will ensure the project's dependencies are installed then run all of the unit tests:

```sh
$ npm install && test
```

### Publishing your generator

If you're tests are passing and you're ready to publish your generator to [npm](https://www.npmjs.com), you can do that now with the following command:

**Are you sure you're ready?!**

Let's go!

```sh
$ npm publish
```

## About

### Related projects

* [generate-file](https://www.npmjs.com/package/generate-file): Generator for generating a single file from a template. | [homepage](https://github.com/generate/generate-file "Generator for generating a single file from a template.")
* [generate-git](https://www.npmjs.com/package/generate-git): Generator for initializing a git repository and adding first commit. | [homepage](https://github.com/generate/generate-git "Generator for initializing a git repository and adding first commit.")
* [generate-travis](https://www.npmjs.com/package/generate-travis): Generate a .travis.yml file to the cwd or specified directory. Install globally and run with… [more](https://github.com/generate/generate-travis) | [homepage](https://github.com/generate/generate-travis "Generate a .travis.yml file to the cwd or specified directory. Install globally and run with generate's CLI, or use as a component in your own generator.")
* [generate](https://www.npmjs.com/package/generate): Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the… [more](https://github.com/generate/generate) | [homepage](https://github.com/generate/generate "Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the robustness and configurability of Yeoman, the expressiveness and simplicity of Slush, and more powerful flow control and composability than either.")

### Community

Are you using [Generate](https://github.com/generate/generate) in your project? Have you published a [generator](https://github.com/generate/generate/blob/master/docs/generators.md) and want to share your project with the world?

Here are some suggestions!

* If you get like Generate and want to tweet about it, please feel free to mention `@generatejs` or use the `#generatejs` hashtag
* Show your love by starring [Generate](https://github.com/generate/generate) and `generate-appveyor`
* Get implementation help on [StackOverflow](http://stackoverflow.com/questions/tagged/generate) (please use the `generatejs` tag in questions)
* **Gitter** Discuss Generate with us on [Gitter](https://gitter.im/generate/generate)
* If you publish an generator, thank you! To make your project as discoverable as possible, please add the keyword `generategenerator` to package.json.

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Brian Woodward**

* [github/doowb](https://github.com/doowb)
* [twitter/doowb](http://twitter.com/doowb)

### License

Copyright © 2016, [Brian Woodward](https://github.com/doowb).
Released under the [MIT license](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.2.0, on October 19, 2016._