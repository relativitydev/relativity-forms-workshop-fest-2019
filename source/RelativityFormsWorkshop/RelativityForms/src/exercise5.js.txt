(function iifeGeneratingEventHandlers(eventNames, convenienceApi) {
	var eventHandlers = {};

	var CURRENT_ENTHUSIASM_GUID = "692C7C4D-3C6B-4729-86E4-426A101E1479".toLowerCase();
	var MAXIMUM_ENTHUSIASM_GUID = "5426056E-C815-430C-93FB-57C979A88715".toLowerCase();
	var CONTAIN_ENTHUSIASM_GUID = "0EE79570-5540-49F9-8DED-BDE5840AF433".toLowerCase();
	
	var dal = {
		reportEnthusiasmAsyncUrl: "KeplerLab.Services.Interfaces.IEnthusiasticPersonModule/PeopleAnalyzer/ReportEnthusiasmAsync",
		reportEnthusiasmAsync: function reportEnthusiasmAsync(artifactId) {
			var field = convenienceApi.fieldHelper;
			var name;

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
				name = values[0];
				return xhr.keplerPost(url, payload);
			}).then(function reportSummary(response) {
				// EXERCISE 5
				// make use of the modals variable to display this summary
				return modals.notice(
					[name,"'s results"].join(""),
					response.summary
				);
			}).catch(function reportApiIssue(err) {
				alert(err);
			});
		}
	};

	// EXERCISE 5
	// modals and messaging
	var modals = {
		notice: function(title, text) {
			// use the convenienceApi.modalService for fun
			return convenienceApi.modalService.confirm({
				title: title,
				message: text,
				acceptText: "All right",
				cancelText: "All right already!"
			});
		}
	}

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

	eventHandlers[eventNames.HYDRATE_LAYOUT_COMPLETE] = function () { 		   		   	 	
		updateMaximumEnthusiasmVisibility();
	};

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
