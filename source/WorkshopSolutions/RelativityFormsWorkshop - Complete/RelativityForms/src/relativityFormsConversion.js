(function iifeGeneratingEventHandlers(eventNames, convenienceApi) {
	// the object we will be returning
	var eventHandlers = {};

	// Field GUIDs
	var CURRENT_ENTHUSIASM_GUID = "692C7C4D-3C6B-4729-86E4-426A101E1479".toLowerCase();
	var MAXIMUM_ENTHUSIASM_GUID = "5426056E-C815-430C-93FB-57C979A88715".toLowerCase();
	var CONTAIN_ENTHUSIASM_GUID = "0EE79570-5540-49F9-8DED-BDE5840AF433".toLowerCase();
	
	// DETAILED STEPS: ADDING MARKUP TO A CONSOLE (step 1 - 3 DAL addition)
	// data access layer
	dal = {
		// Kepler Service
		reportEnthusiasmAsyncUrl: "KeplerLab.Services.Interfaces.IEnthusiasticPersonModule/PeopleAnalyzer/ReportEnthusiasmAsync",
		reportEnthusiasmAsync: function reportEnthusiasmAsync(artifactId) {
			// DETAILED STEPS: INVOKING THE KEPLER SERVICE VIA RELATIVITYHTTPCLIENT.KEPLERPOST
			var field = convenienceApi.fieldHelper;

			convenienceApi.promiseFactory.all([
				field.getValue("Name"),
				field.getValue(CURRENT_ENTHUSIASM_GUID),
				field.getValue(CONTAIN_ENTHUSIASM_GUID),
				field.getValue(MAXIMUM_ENTHUSIASM_GUID),
			]).then(function obtainReport(values) {
				var xhr = convenienceApi.relativityHttpClient;
				var url = dal.reportEnthusiasmAsyncUrl;
				var payload = {
					request: {
						artifactId: artifactId,
						name: values[0],
						currentEnthusiasm: values[1],
						containEnthusiasm: values[2],
						maximumEnthusiasm: values[3]
					}
				};
				return xhr.keplerPost(url, payload);
			}).then(function reportSummary(response) {
				alert(response.summary);
			});
		}
	};

	// DETAILED STEPS: CONTROLLING VISIBILITY
	// Require and show the max field when containing oneself
	// Hide and remove requirement otherwise
	// This is accepting a boolean as an option to bypass doing a fieldHelper look-up 
	// when the value for the field is known at invocation.
	function updateMaximumEnthusiasmVisibility(showValue) {
		var field = convenienceApi.fieldHelper;
		var promise = convenienceApi.promiseFactory.resolve(showValue);

		if (typeof showValue !== "boolean") {
			promise = field.getValue(CONTAIN_ENTHUSIASM_GUID);
		}

		promise.then(function (containEnthusiasm) {
			field.setIsHidden(MAXIMUM_ENTHUSIASM_GUID, !containEnthusiasm);
		});
	}

	// DETAILED STEPS: ADDING MARKUP TO A CONSOLE
	// No longer just a skeleton, now we're adding 3 elements to it, and using a 
	// click handler to invoke another function
	eventHandlers[eventNames.CREATE_CONSOLE] = function () {
		var consl = convenienceApi.console;
		var gen = consl.generate;	
		var title = gen.title({ innerText: "Contain Yourself!" });
		var button = gen.button({ innerText: "Report Enthusiasm" });
		var section = gen.section({}, [button]);

		button.addEventListener("click", dal.reportEnthusiasmAsync.bind(null, this.artifactId));

		consl.containersPromise.then(function(containers) {
			containers.rootElement.appendChild(title);
			containers.rootElement.appendChild(section);
		});
	};

	// DETAILED STEPS: MAKING USE OF UPDATEMAXIMUMENTHUSIASMVISIBILITY ON LOAD
	// Hydrate Layout Complete is the point in the Load Pipeline when the convenienceApi's fieldHelper 
	// is safe to use. It is usually rougly equivalent to jQuery's $(document).ready(), though in many
	// cases within Relativity Forms, making visibility changes within this function does not result
	// in the shifting often seen in equivalent code fired within a .ready()
	// It's likely you wouldn't see the field disappear on load, it'd be gone by the time you could see it.
	eventHandlers[eventNames.HYDRATE_LAYOUT_COMPLETE] = function () {
		updateMaximumEnthusiasmVisibility();
	};

	// DETAILED STEPS: MAKING USE OF UPDATEMAXIMUMENTHUSIASMVISIBILITY IN RESPONSE TO PAGE INTERACTION
	// Using fieldGuidToFieldIdMap to determine fieldId and using that information both to decide if
	// we'll update the yes/no field, and also to push the updated value to the update function
	eventHandlers[eventNames.PAGE_INTERACTION] = function (modelData, event) {
		var containEnthusiasmId = this.fieldGuidToFieldIdMap.get(CONTAIN_ENTHUSIASM_GUID);
		if (event.type === "change") {
			switch (event.payload && event.payload.fieldId) {
				case containEnthusiasmId: {
					updateMaximumEnthusiasmVisibility(modelData[containEnthusiasmId]);
				} break;
				default: break;
			}
		}
	};

	return eventHandlers;
}(eventNames, convenienceApi));

// eof
