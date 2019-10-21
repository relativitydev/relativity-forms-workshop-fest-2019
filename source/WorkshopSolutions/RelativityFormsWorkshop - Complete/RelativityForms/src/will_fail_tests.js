// If I am tested, this comment will result in test failure, because this line has to be the beginning of the event handlers immediately invoked function expression.
(function iifeGeneratingEventHandlers(eventNames, convenienceApi, privilegedEnvelope) {
	/*global eventNames, convenienceApi, privilegedEnvelope */

	// In order to see me fail tests, change the "xdescribe" in will_fail_tests.spec.js to "describe".
	// For more information, see the documentation for Jasmine 2.x here: https://jasmine.github.io/2.0/introduction.html

	return privilegedEnvelope || {};
}(eventNames, convenienceApi, privilegedEnvelope));

// eof
