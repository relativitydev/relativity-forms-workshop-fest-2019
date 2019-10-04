# Relativity Forms RDO Conversion Template

## Overview

This is a template for a conversion of a customized RDO from Classic to Relativity Forms.  It is set up for development of Relativity Forms Event Handlers already in the format required by Relativity Forms: ecmascript 5.1 immediately invoked function expression (IIFE).

The template provides:

1. Front-end automation for unit testing and linting (analyzing code for errors and stylistic issues).
2. Basic project structure for the conversion itself, including an initial skeleton source file, and unit tests file side by side with the code.
3. Commandline scripts to aid development and the execution of linting and testing.
4. A small RDO-conversion-oriented testHelpers assembly.

## Structure:

### In the template:
```
lib/
  + rdoEventHandlerTestHelpers.js  // this will eventually be an npm package itself.
src/
  + relativityFormsConversion.js
  + relativityFormsConversion.spec.js
eslintrc.es5.json
eslintrc.es6.json
gulpfile.js
karma.conf.js
package.json
readme.md
```
#### eslintrc json files

These are configuration files for the execution of esLint over es5 and es6 code.
The es5 linting covers the actual event handlers code, while the es6 linting covers the unit tests.

#### karma.conf.js

This is the configuration file for the test runner, karma.
In order to keep things simple, and avoid the need for transpilation of the rdoEventHandlerTestHelpers.js and/or the complexity of dependency management plugins, the tests are es6 code, and import the testHelpers library.
Note that a current resultant limitation of this template is that browsers configuration may only set up with browsers capable of native es6 module loading, and native support for Promises and the Fetch API.
Future versions of this template are likely to provide flexibility for full es5 codebase and/or possibly transpilation of es6 to es5.

#### gulpfile.js

This is the input for gulp, a code-over-convention task runner.  The JavaScript within is what's responsible for starting test runs and linting, as well as running these tasks on file watchers.  While you can call the tasks here with direct gulp commands from the commandline, a much simpler way is to call them indirection via the npm scripts in package.json

#### package.json (and package-lock.json)

While this file controls what's installed as dependencies for this template, you're receiving the template in a state such that all dependencies are preloaded, and no execution of "npm install" should be necessary.  This file remains, however, your main entry point for commandline execution of the front-end automation.  The "scripts" section of this file provides the functionality you can use from the commandline via `npm run <script_name>`.  The commands are as follows:

* `lint-tests` - run linting over all .spec (test) files
* `lint` - run static analysis (linting) over all non-.spec files.
* `test` - run a single pass through all unit tests.
* `qa` - run lint, and then test, in series.
* `tdd` - run qa on a file watch, meaning when a script or test file is added or altered, qa will execute as a result. This runs continually until halted with Ctrl+C
* `watch-tests` - like tdd, except this only runs the unit tests, and not the linting.

The tdd command should be your friend: `npm run tdd`

#### /lib/rdoEventHandlerTestHelpers

This is a small library aimed at simplifying and supporting the testing of your event handlers.  
This library is written with some jasmine-specific assertions baked-into it, to make your life a little easier.  This has the limiting effect of dictating that you use jasmine as your assertion library.
While there is a slightly larger surface area than this, the two functions with which you will be primarily concerned are `createEventHandlersForFileName`, and `expectEventHandlersSurfaceArea`.

`createEventHandlersForFileName` pulls your event handler file and turns it into object code. Before returning the eventHandlers object to you, this function runs an assertion to ensure that the result of this conversion resulted in a truthy object. If the assertion fails, an attempt is made to give suggestions at what might've be the cause of failure.
```
/**
 * @desc Returns a Promise<Object<eventHandlers>> for the specified fileName.
 * @param {String} fileName The name, or path relative to baseUrl, of the file from which to create event handlers.
 * @param {Object} settings [Optional] Object containing execution options for obtaining event handler file content and transforming it into code.
 * @param {Object} settings.httpClient [Optional] An httpClient to use for fetching file content (it's expected to have a "get" method on it, and the Response object is expected to match the Fetch API). If left unsupplied, the Fetch API will be used. This option is available to support http mocking.
 * @param {Object} settings.convenienceApi [Optional] Mock or actual instance of the Relativity Forms convenienceApi or the portions of it needed by the test about to be run. While optional, tests are likely to fail if this is not provided, as undefined will be passed to the eventHandler construction if this isn't supplied.
 * @param {Object} settings.privilegedEnvelope [Optional] Object onto which the eventHandlers to be constructed may define their privileged data or functions. If not provided, undefined will be passed to the eventHandler iife. Utility of this envelope in tests depends upon the implementation in the iife.
 * @returns {Promise<Object<eventHandlers>>} A Promise which resolves into the eventHandlers object for the specified fileName.
 */
createEventHandlersForFileName(fileName, settings = {}) 
```

`expectEventHandlersSurfaceArea` asserts that the eventHandlers object you've given it contains all of the functions you're expecting, and that the functions you've specified are valid eventNames.

```
/**
 * @desc Executes expect that the surface area of the given event handlers matches the given expected names, and that the implemented handlers are all valid (present in Relativity Forms' EVENT_NAMES).
 * @param {Object<EventHandlers>} eventHandlers The object for which the surface area is to be checked.
 * @param {Array<String>} expectedEventNames The Array of event names expected to be handled.
 * @returns {undefined} This function does not return a value.
 */
expectEventHandlersSurfaceArea(eventHandlers, expectedEventNames)
```

### Created by npm install
```
node_modules/
```

The node_modules folder should already exist, and should be populated with all of the dependencies necessary to run this template as-is.  Should you find this is not the case, as long as you have an internet connection, running `npm install` ought to correct any gaps.
