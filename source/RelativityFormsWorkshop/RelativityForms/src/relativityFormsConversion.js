(function iifeGeneratingEventHandlers(eventNames, convenienceApi, privilegedEnvelope) {
	/* global alert, eventNames, convenienceApi, privilegedEnvelope */

	// using "privilegedEnvelope" gives us exposure of internals at test-time, without
	// exposing them in production.  This makes it possible to test our code a in a more
	// unitary way than we would otherwise be able, due to RelativityForms handler code
	// being defined within an immediately invoked function expression
	var vars = privilegedEnvelope || {};

	// the object we will be returning
	var eventHandlers = {};

	// Field GUIDs
	vars.CURRENT_ENTHUSIASM_GUID = "692C7C4D-3C6B-4729-86E4-426A101E1479".toLowerCase();
	vars.MAXIMUM_ENTHUSIASM_GUID = "5426056E-C815-430C-93FB-57C979A88715".toLowerCase();
	vars.CONTAIN_ENTHUSIASM_GUID = "0EE79570-5540-49F9-8DED-BDE5840AF433".toLowerCase();

	// skeleton console creation handler - even with it being empty like it is below
	// the existence of the function will tell Relativity Forms to create the console
	// in View mode.
	eventHandlers[eventNames.CREATE_CONSOLE] = function () {
		// not doing much
		return;
	};

	return eventHandlers;
}(eventNames, convenienceApi, privilegedEnvelope));

// eof
