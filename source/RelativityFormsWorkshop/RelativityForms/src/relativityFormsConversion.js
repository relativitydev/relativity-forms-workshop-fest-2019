(function iifeGeneratingEventHandlers(eventNames, convenienceApi) {
	// the object we will be returning
	var eventHandlers = {};

	// Field GUIDs
	var CURRENT_ENTHUSIASM_GUID = "692C7C4D-3C6B-4729-86E4-426A101E1479".toLowerCase();
	var MAXIMUM_ENTHUSIASM_GUID = "5426056E-C815-430C-93FB-57C979A88715".toLowerCase();
	var CONTAIN_ENTHUSIASM_GUID = "0EE79570-5540-49F9-8DED-BDE5840AF433".toLowerCase();

	// skeleton console creation handler - even with it being empty like it is below
	// the existence of the function will tell Relativity Forms to create the console
	// in View mode.
	eventHandlers[eventNames.CREATE_CONSOLE] = function () {
		// We're not doing much here. This will be fleshed-out in exercise 4.
		return;
	};

	return eventHandlers;
}(eventNames, convenienceApi));

// eof
