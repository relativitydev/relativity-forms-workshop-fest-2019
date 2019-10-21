// This is an excellent skeleton, which will fail. - Remove this entire line and any whitespace to remove object creation test failures.
(function iifeGeneratingEventHandlers(eventNames, convenienceApi, privilegedEnvelope) {
	/* global alert, eventNames, convenienceApi, privilegedEnvelope */

	// using "privilegedEnvelope" gives us exposure of internals at test-time, without
	// exposing them in production.  This makes it possible to test our code a in a more
	// unitary way than we would otherwise be able, due to RelativityForms handler code
	// being defined within an immediately invoked function expression
	var vars = privilegedEnvelope || {};

	// the object we will be returning
	var eventHandlers = {
		accidentallyAdded: function () {
			return () => "no arrows"; // present just to annoy the tests and linting.
		}
	};

	// Field GUIDs
	vars.CURRENT_ENTHUSIASM_GUID = "692C7C4D-3C6B-4729-86E4-426A101E1479".toLowerCase();
	vars.MAXIMUM_ENTHUSIASM_GUID = "5426056E-C815-430C-93FB-57C979A88715".toLowerCase();
	vars.CONTAIN_ENTHUSIASM_GUID = "0EE79570-5540-49F9-8DED-BDE5840AF433".toLowerCase();

	// skeleton console creation handler - even with it being empty like it is below
	// the existence of the function will tell Relativity Forms to create the console
	// in View mode.
	// eventHandlers[eventNames.CREATE_CONSOLE] = function () {
	// 	// not doing much
	// 	return;
	// };

	return eventHandlers;
}(eventNames, convenienceApi, privilegedEnvelope));

// Lines 2-32 are an Immediately Invoked Function Expression (IIFE) - this is a function which runs exactly once at the time it is
// defined. Iife syntax prevents pollution of the global scope, allowing outside exposure of variables to be controlled.
// See: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// Relativity Forms IIFEs are expected to return an object, and that object contains the handler functions for Relativity Forms events
// as string to function key value pairs, ex:
//
//	{
//		createConsole: function() { return; }
//	}

// eventNames is a name to string dictionary for the named of events which can be handled by the developer's code
// see: https://platform.relativity.com/RelativityOne/Content/Relativity_Forms/Additional_Forms_API_objects.htm#eventNam
// convenienceApi is the set of script APIs Relativity Forms provides to simplify writing event handlers
// see: https://platform.relativity.com/RelativityOne/Content/Relativity_Forms/convenienceApi_object.htm

// Line 1 must be removed in order to stop failing unit tests. The first line of this file MUST be the start of the
// IIFE in order for event handlers to be created successfully.

// Line 3's block comment is a directive to the linter telling it to assume some variables exist which aren't defined within this file.
// Because "alert" is in there, but is not used within this file, it will cause a lint failure. Remove " alert," to correct that.

// Line 9 guarantees that any property on "vars" will be available to testing, where a privilegedEnvelope may be passed, but also
// ensures that when no envelope is given (as is the case in prod) the vars variable itself begins as a valid object, meaning the
// same code can be used in testing and in prod without issues, and without leaking internals to some wider scope in prod

// eof
