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

	// Require and show the max field when containing oneself
	// Hide and remove requirement otherwise
	// This is accepting a boolean as an option to bypass doing a fieldHelper look-up 
	// when the value for the field is known at invocation.
	function updateMaximumEnthusiasmVisibility(showValue) {
		var field = convenienceApi.fieldHelper;
		var promise = convenienceApi.promiseFactory.resolve(showValue);

		if (typeof showValue !== "boolean") {
			promise = field.getValue(vars.CONTAIN_ENTHUSIASM_GUID);
		}

		promise.then(function (containEnthusiasm) {
			field.setIsRequired(vars.MAXIMUM_ENTHUSIASM_GUID, containEnthusiasm);
			field.setIsHidden(vars.MAXIMUM_ENTHUSIASM_GUID, !containEnthusiasm);
		});
	}

	// skeleton console creation handler - even with it being empty like it is below
	// the existence of the function will tell Relativity Forms to create the console
	// in View mode.
	eventHandlers[eventNames.CREATE_CONSOLE] = function () {
		// not doing much
		return;
	};

	// Hydrate Layout Complete is the point in the Load Pipeline when the convenienceApi's fieldHelper 
	// is safe to use. It is usually rougly equivalent to jQuery's $(document).ready(), though in many
	// cases within Relativity Forms, making visibility changes within this function does not result
	// in the shifting often seen in equivalent code fired within a .ready()
	// It's likely you wouldn't see the field disappear on load, it'd be gone by the time you could see it.
	eventHandlers[eventNames.HYDRATE_LAYOUT_COMPLETE] = function () { 		   		   	 	
		updateMaximumEnthusiasmVisibility();
	};

	// Using fieldGuidToFieldIdMap to determine fieldId and using that information both to decide if
	// we'll update the yes/no field, and also to push the updated value to the update function
	eventHandlers[eventNames.PAGE_INTERACTION] = function (modelData, event) {
		var containEnthusiasmId = this.fieldGuidToFieldIdMap.get(vars.CONTAIN_ENTHUSIASM_GUID);
		if (event.type === "change") {
			switch (event.payload && event.payload.fieldId) {
				case containEnthusiasmId: {
					if (event.payload.htmlEvent.type === "change" ) {
						updateMaximumEnthusiasmVisibility(modelData[containEnthusiasmId]);
					}
				} break;
				default: break;
			}
		}
	};

	return eventHandlers;
}(eventNames, convenienceApi, privilegedEnvelope));

// eof
