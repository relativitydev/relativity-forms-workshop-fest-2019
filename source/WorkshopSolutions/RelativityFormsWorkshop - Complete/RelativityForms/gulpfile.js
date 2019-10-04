(function gulpfile() {
	"use strict";
	
	// NOTE:  This file is written containing many es6 niceties such as
	//			lambdas, spread operator, rest parameters, destructuring assignment and consts
	//			In this way, this file is more like the es6 tests than it is like the event handler
	//			es5 code, despite the fact that this file is written as an IIFE.
	
	const { src, dest, series, parallel, watch } = require("gulp");
	const eslint = require("gulp-eslint");
	const Karma = require("karma").Server;
	const assign = Object.assign || require("object.assign");
	const BROWSER_NO_ACTIVITY_TIMEOUT = 60000;
	
	const paths = {
		source: {
			files: "src/**/*.js",
			ignorePattern: "src/**/*.spec.js",
			lintRc: "eslintrc.es5.json"
		},
		tests: {
			files: "src/**/*.spec.js",
			lintRc: "eslintrc.es6.json"
		}
	};

	const noOpTask = (cb) => { console.log("no-op"); cb(); };

	const noteTdd = (cb) => {
		console.clear();
		console.warn("Running QA in TDD.");
		cb();
	}

	const noteTddo = (cb) => {
		console.clear();
		console.warn("Running test-only in TDD.");
		cb();
	}

	// linting
	const lintCode = (...args) => {
		return src([paths.source.files])
			.pipe(eslint({
				configFile: paths.source.lintRc,
				ignorePattern: paths.source.ignorePattern
			})).pipe(eslint.format())
			.pipe(eslint.failAfterError());
	};

	const lintTests = (...args) => {
		return src([paths.tests.files])
			.pipe(eslint({
				configFile: paths.tests.lintRc,
			})).pipe(eslint.format())
			.pipe(eslint.failAfterError());
	};

	//
	//! This template used to lint tests, but it's annoying
	//! So that's being removed for time-constrained workshop
	//! activities.
	//
	const lint = lintCode; // parallel(lintCode, lintTests);

	// testing
	
	/**
	 * @desc returns a function that checks the exit code and supplies an error message to the provided callback if needed
	 * @param {function(errorMessage: ?String): undefined} done gulp task completion callback
	 * @returns {function(exitCode: Number): undefined} a function that handles exit code
	 */
	function handleTestCompletion(done) {
		return (exitCode) => {
			const ERROR_MESSAGE = "An error occurred while running unit tests. Check build logs for details.";

			const hasError = exitCode !== 0;
			done(hasError ? ERROR_MESSAGE : null);
		 };
	}
	
	/**
	 * @desc async task for running a test once and exiting; the inner function of test and nolinttest
	 * @param {Function} done callback which makes the test async
	 * @returns {void} There is no return value
	 */
	function testInner(done) {
		let config = {
			configFile: `${__dirname}/karma.conf.js`,
			browserNoActivityTimeout: BROWSER_NO_ACTIVITY_TIMEOUT,
			singleRun: true,
			browsers: ["ChromeHeadless"],
			reporters: ["progress"]
		};

		new Karma(config, handleTestCompletion(done)).start();
	}	

	const test = (done) => {
		return testInner(done)
	};

	// lint + test
	const qa = series(lint, test);

	// qa on a watch
	const tdd = (...args) => {
		noteTdd(() => {});
		setTimeout(qa);
		return watch([paths.source.files], series(noteTdd, qa));
	};

	// test-only on a watch
	const tddo = (...args) => {
		noteTddo(() => {});
		setTimeout(test);
		return watch([paths.source.files], series(noteTddo, test));
	}

	exports.lintCode = lintCode;
	exports.lintTests = lintTests;
	exports.lint = lint;
	exports.test = test;
	exports.qa = qa;
	exports.tdd = tdd;
	exports.tddo = tddo;

	exports.default = noOpTask;
}());

// eof
