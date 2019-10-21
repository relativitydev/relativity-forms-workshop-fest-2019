const FORM_VIEW_MODEL_TYPE = {
	VIEW: 0,
	ADD: 1,
	EDIT: 2
};

const VIEW_MODEL_NAME = {
	ADD: "add",
	VIEW: "view",
	EDIT: "edit",
	APPLICATION_ERROR: "applicationError",
	PERMISSION_DENIED_ERROR: "permissionDeniedError",
	NO_LAYOUT: "noLayoutError",
	EXTERNAL: 0
};

/**
 * @const {Object.<string, int>} ARTIFACT_TYPE
 */
const ARTIFACT_TYPE = {
	AGENT: 20,
	AGENT_TYPE: 35,
	BATCH: 27,
	BATCH_SET: 24,
	CLIENT: 5,
	DOCUMENT: 10,
	EVENT_HANDLER: 1000002,
	FIELD: 14,
	INSTALL_EVENT_HANDLER: 40,
	INSTANCE_SETTING: 42,
	LAYOUT: 16,
	MATTER: 6,
	OBJECT_RULE: 33,
	OBJECT_TYPE: 25,
	RELATIVITY_SCRIPT: 28,
	SEARCH: 15,
	SEARCH_INDEX: 29,
	SYSTEM: 1,
	TAB: 23,
	USER: 2,
	WORKSPACE: 8,
	CREDENTIAL: 43
};

const EVENT_NAMES = {
	EVENT_HANDLERS_REGISTERED: "eventHandlersRegistered",
	VALIDATION: "validation",
	TRANSFORM_LAYOUT: "transformLayout",
	HYDRATE_LAYOUT: "hydrateLayout",
	HYDRATE_LAYOUT_COMPLETE: "hydrateLayoutComplete",
	REPLACE_OBTAIN_ADDITIONAL_DATA: "replaceObtainAdditionalData",
	POST_OBTAIN_ADDITIONAL_DATA: "postObtainAdditionalData",
	PAGE_LOAD_COMPLETE: "pageLoadComplete",
	PAGE_UNLOAD: "pageUnload",
	CREATE_ACTION_BAR: "createActionBar",
	CREATE_CONSOLE: "createConsole",
	OVERRIDE_PICKER_DATASOURCE: "overridePickerDataSource",
	PAGE_INTERACTION: "pageInteraction",
	PRE_SAVE: "preSave",
	POST_SAVE: "postSave",
	REPLACE_READ: "replaceRead",
	REPLACE_SAVE: "replaceSave",
	REPLACE_GET_NEW_OBJECT_INSTANCE: "replaceGetNewObjectInstance",
	UPDATE_ACTION_BAR: "updateActionBar",
	UPDATE_CONSOLE: "updateConsole",
	VALIDATE_SAVE: "validateSave",
	ITEM_LIST_RELOADED: "itemListReloaded",
	PRE_DELETE: "preDelete",
	REPLACE_DELETE: "replaceDelete",
	POST_DELETE: "postDelete",
	ITEM_LIST_MODIFY_COLUMNS: "itemListModifyColumns",
	ITEM_LIST_MODIFY_ACTIONS: "itemListModifyActions",
	REPLACE_READ_DELETE_DEPENDENCY_LIST: "replaceReadDeleteDependencyList",
	REPLACE_FILE_ACTIONS: "replaceFileActions"
};

/**
 * @const Enum for CRUD permission types
 */
const PERMISSION_TYPE = {
	VIEW: 1,
	EDIT: 2,
	DELETE: 3,
	SECURE: 4,
	ADD: 6,
	OTHER: 7
};

/**
 * @const {String} Enum of actions common actions that are localized
 */
const ACTIONS = {
	SAVE: "save",
	DELETE: "delete"
};

/**
 * @const {String} Enum of modal themes
 */
const MODAL_THEMES = {
	CONFIRMATION: "confirmation",
	NO_CONTAINER: "no-container",
	TEXT_EDITOR: "text-editor"
};

/**
 * @const Enum of actions used in item list.
 */
const ACTION_TYPES = {
	NEW: "New",
	DELETE: "Delete",
	LINK: "Link",
	UNLINK: "Unlink"
};

// eof

const mockPermissionRepository = jasmine.createSpyObj("PermissionRepository", ["canView", "canEdit", "canDelete", "canSecure", "canAdd", "canViewAudit"]);
mockPermissionRepository.canView.and.returnValue(true);
mockPermissionRepository.canEdit.and.returnValue(true);
mockPermissionRepository.canDelete.and.returnValue(true);
mockPermissionRepository.canSecure.and.returnValue(true);
mockPermissionRepository.canAdd.and.returnValue(true);
mockPermissionRepository.canViewAudit.and.returnValue(true);

const userPermissions = [
	{
		Selected: true,
		Name: "View BatchSet",
		ArtifactType: { ID: ARTIFACT_TYPE.BATCH_SET, Guids: [] },
		PermissionID: 1000036,
		PermissionType: { ID: PERMISSION_TYPE.VIEW, Name: "View" }
	},
	{
		Selected: true,
		Name: "Edit BatchSet",
		ArtifactType: { ID: ARTIFACT_TYPE.BATCH_SET, Guids: [] },
		PermissionID: 1000037,
		PermissionType: { ID: PERMISSION_TYPE.EDIT, Name: "Edit" }
	},
	{
		Selected: true,
		Name: "Delete BatchSet",
		ArtifactType: { ID: ARTIFACT_TYPE.BATCH_SET, Guids: [] },
		PermissionID: 1000038,
		PermissionType: { ID: PERMISSION_TYPE.DELETE, Name: "Delete" }
	},
	{
		Selected: true,
		Name: "Secure BatchSet",
		ArtifactType: { ID: ARTIFACT_TYPE.BATCH_SET, Guids: [] },
		PermissionID: 1000039,
		PermissionType: { ID: PERMISSION_TYPE.SECURE, Name: "Secure" }
	},
	{
		Selected: true,
		Name: "Add BatchSet",
		ArtifactType: { ID: ARTIFACT_TYPE.BATCH_SET, Guids: [] },
		PermissionID: 1000041,
		PermissionType: { ID: PERMISSION_TYPE.ADD, Name: "Add" }
	},
	{
		Selected: true,
		Name: "Add Layout",
		ArtifactType: { ID: ARTIFACT_TYPE.LAYOUT },
		PermissionID: 1000043,
		PermissionType: { ID: PERMISSION_TYPE.ADD, Name: "Add" }
	}
];

const userNoPermissions = [
	{
		Selected: false,
		Name: "View BatchSet",
		ArtifactType: { ID: ARTIFACT_TYPE.BATCH_SET, Guids: [] },
		PermissionID: 1000036,
		PermissionType: { ID: PERMISSION_TYPE.VIEW, Name: "View" }
	},
	{
		Selected: false,
		Name: "Edit BatchSet",
		ArtifactType: { ID: ARTIFACT_TYPE.BATCH_SET, Guids: [] },
		PermissionID: 1000037,
		PermissionType: { ID: PERMISSION_TYPE.EDIT, Name: "Edit" }
	},
	{
		Selected: false,
		Name: "Delete BatchSet",
		ArtifactType: { ID: ARTIFACT_TYPE.BATCH_SET, Guids: [] },
		PermissionID: 1000038,
		PermissionType: { ID: PERMISSION_TYPE.DELETE, Name: "Delete" }
	},
	{
		Selected: false,
		Name: "Secure BatchSet",
		ArtifactType: { ID: ARTIFACT_TYPE.BATCH_SET, Guids: [] },
		PermissionID: 1000039,
		PermissionType: { ID: PERMISSION_TYPE.SECURE, Name: "Secure" }
	},
	{
		Selected: false,
		Name: "Add BatchSet",
		ArtifactType: { ID: ARTIFACT_TYPE.BATCH_SET, Guids: [] },
		PermissionID: 1000041,
		PermissionType: { ID: PERMISSION_TYPE.ADD, Name: "Add" }
	},
	{
		Selected: false,
		Name: "Add Layout",
		ArtifactType: { ID: ARTIFACT_TYPE.LAYOUT },
		PermissionID: 1000042,
		PermissionType: { ID: PERMISSION_TYPE.ADD, Name: "Add" }
	}
];

const adminPermissions = [
	{
		PermissionID: 1000031,
		Selected: true
	}
];

const adminNoPermissions = [
	{
		PermissionID: 1000031,
		Selected: false
	}
];

const mockPermissionManager = jasmine.createSpyObj("mockPermissionManager", ["getPermissionSelected", "getAdminOperationPermissionSelected"]);
mockPermissionManager.getPermissionSelected.and.callFake((workspaceArtifactID) => {
	if (workspaceArtifactID === 1) {
		return Promise.resolve(userPermissions);
	}
	return Promise.resolve(userNoPermissions);
});
mockPermissionManager.getAdminOperationPermissionSelected.and.callFake((workspaceArtifactID) => {
	if (workspaceArtifactID === 1) {
		return Promise.resolve(adminPermissions);
	}
	return Promise.resolve(adminNoPermissions);
});

const mockStartupSettings = {
	"LoggedInUserID": 159,
	"ChoiceLimitForUI": 265,
	"IsLoggedInUserSystemAdmin": true,
	"IsSystemType": true,
	"IsDynamicType": true,
	"IsTenancyAvailable": true,
	"RootCaseArtifactID": 314,
	"Time": {
		"IsDST": true,
		"ServerTimeOffsetHours": 3,
		"ServerTimeOffsetMinutes": 58
	},
	"Toggles": {
		"Relativity.Core.Toggle.ArbitraryToggle": true
	}
};

const getMockEventHandlerApi = () => {
	const mockDateTimeFormatter = jasmine.createSpyObj("mockDateTimeFormatter", ["format"]);
	mockDateTimeFormatter.format.and.callFake((dateTime) => dateTime.toString());
	const mockDateTime = jasmine.createSpyObj("mockDateTime", ["getFormatter"]);
	mockDateTime.getFormatter.and.returnValue(mockDateTimeFormatter);

	const mockI18n = jasmine.createSpyObj("i18n", ["tr", "addResources", "getLocale", "nf"]);
	mockI18n.tr.and.callFake((text) => {
		return text;
	});

	const mockLogFactory = jasmine.createSpyObj("logFactory", ["getLogger"]);
	mockLogFactory.getLogger.and.returnValue({ info: () => {} });

	const mockFieldHelper = jasmine.createSpyObj("fieldHelper", [
		"addAdditionalData",
		"setValue",
		"setIsEditMode",
		"setIsHidden",
		"setIsDisabled",
		"getHtmlElement",
		"getValue",
		"setIsRequired",
		"setAriaDescribedby"
	]);
	mockFieldHelper.getValue.and.returnValue(Promise.resolve());

	const mockStaticTextHelper = jasmine.createSpyObj("staticTextHelper", [
		"retrieveAll",
		"getValue",
		"setValue",
		"setIsHidden",
		"getHtmlElement"
	]);

	const mockLayoutApi = jasmine.createSpyObj("mockLayoutApi", ["removeFieldFromLayout", "getElementByFieldName", "getElementViewModelByFieldId"]);
	mockLayoutApi.getElementByFieldName.and.returnValue(Promise.resolve());

	const mockRelativityHttpClient = jasmine.createSpyObj("relativityHttpClient", ["keplerPut", "keplerPost", "keplerGet", "keplerDelete"]);
	mockRelativityHttpClient.keplerGet.and.returnValue(Promise.resolve());

	return {
		setFormViewModel: jasmine.createSpy("setFormViewModel"),
		relativityHttpClient: mockRelativityHttpClient,
		layout: mockLayoutApi,
		fieldHelper: mockFieldHelper,
		staticTextHelper: mockStaticTextHelper,
		formSettings: mockStartupSettings,
		dateTime: mockDateTime,
		i18n: mockI18n,
		validation: jasmine.createSpyObj("validation", ["getDefaultSummaryErrorForAction", "getFailedSummaryObject", "getFailedFieldObject", "getFieldErrorObject"]),
		utilities: jasmine.createSpyObj("utilities", ["keyValueArrayToJsonArrayTransformer", "getHtmlEventTarget"]),
		console: {
			containersPromise: (...params) => Promise.resolve(...params),
			generate: jasmine.createSpyObj("generate", ["button", "section", "title"])
		},
		permission: jasmine.createSpyObj("permission", [
			"canView",
			"canEdit",
			"canAdd",
			"canDelete"
		]),
		promiseFactory: {
			resolve: (...params) => Promise.resolve(...params),
			reject: (...params) => Promise.reject(...params),
			all: (...params) => Promise.all(...params)
		},
		constants: { ACTION_TYPES, FORM_VIEW_MODEL_TYPE, VIEW_MODEL_NAME, ARTIFACT_TYPE, ACTIONS, MODAL_THEMES },
		logFactory: mockLogFactory,
		toggles: jasmine.createSpyObj("toggles", ["isEnabled"]),
		modalService: jasmine.createSpyObj("modalService", ["confirm"])
	};
};

// Underlying support for unit testing Relativity Forms PageInteractionEventHandlers without Aurelia or ties / need to use EventHandlerManager

// Framing this internally as an object which I'll export in order that this is unit testable as well
const internals = {
	EVENT_NAMES: EVENT_NAMES,
	getMockConvenienceApi: getMockEventHandlerApi
};

/**
 * @desc Obtain the text content for a file located at the specified fileUrl
 * @param {String} fileUrl The location of the requested file
 * @param {Object} suppliedClient [Optional] An httpClient to use (Must have a "get" method on it, and the Response object must match the Fetch API). If left unsupplied, the Fetch API will be used. This option is available to support http mocking.
 * @returns {Promise<String>} A Promise which resolves to the text content of the requested file.
 */
internals.getFileTextContent = (fileUrl, suppliedClient) => {
	const httpClient = suppliedClient || {
		get: (url) => { return fetch(url, { method: "GET" }); }
	};
	const fileTextContentPromise = !!fileUrl && httpClient.get(fileUrl).then((response) => {
		if (!response.ok) {
			throw new Error(`request for ${fileUrl} failed. Reason: ${response.statusText} (${response.status})`);
		}
		const fileTextContent = response.text();
		return fileTextContent;
	});
	return fileTextContentPromise;
};

/**
 * @desc Obtain the text content for a file located at the specified fileUrl
 * @param {String} fileUrl The location of the requested file
 * @param {Object} settings Object controlling portions of this function's execution.
 * @param {Object} httpClient [Optional] An httpClient to use (it's expected to have a "get" method on it, and the Response object is expected to match the Fetch API). If left unsupplied, the Fetch API will be used. This option is available to support http mocking.
 * @returns {Promise<String>} A Promise which resolves to the text content of the requested file
 */
internals.getFileTextContentWithSettings = (fileUrl, settings = {}) => {
	const fileTextContentPromise = internals.getFileTextContent(
		fileUrl,
		(settings.httpClient || (void 0))
	);
	return fileTextContentPromise;
};

/**
 * @desc Turn eventHandler iife text (file content) into code.
 * @param {String} fileTextContent Text of a well-formed eventHandler file. This should be an immediately invoked function (iife) taking three parameters: eventNames, convenienceApi, and privilegedEnvelope, which returns an object.
 * @param {Object} settings Object containing the convenienceApi and privilegedEnvelope to be supplied to the eventHandler construction function.
 * @param {Object} settings.convenienceApi [Optional] Mock or actual instance of the Relativity Forms convenienceApi or the portions of it needed by the test about to be run. While optional, tests are likely to fail if this is not provided, as undefined will be passed to the eventHandler construction if this isn't supplied.
 * @param {Object} settings.privilegedEnvelope [Optional] Object onto which the eventHandlers to be constructed may define their privileged data or functions. If not provided, undefined will be passed to the eventHandler iife. Utility of this envelope in tests depends upon the implementation in the iife.
 * @returns {Object<eventHandlers>} Returns the eventHandlers object created by the fileTextContent.
 */
internals.createEventHandlersFromFileTextContent = (fileTextContent, settings = {}) => {
	const {convenienceApi, privilegedEnvelope} = settings;
	const eventHandlers = new Function( // eslint-disable-line no-new-func
		"eventNames",
		"convenienceApi",
		"privilegedEnvelope",
		`"use strict"; console.log('entering and executing function wrapper'); return ${fileTextContent}`
	)(
		internals.EVENT_NAMES,
		convenienceApi,
		privilegedEnvelope
	);

	return eventHandlers;
};

/**
 * @desc Turn the specified fileUrl into event handler code.
 * @param {String} fileUrl The location of the requested file.
 * @param {Object} settings Object containing the convenienceApi and privilegedEnvelope to be supplied to the eventHandler construction function.
 * @param {Object} settings.httpClient [Optional] An httpClient to use for fetching file content (it's expected to have a "get" method on it, and the Response object is expected to match the Fetch API). If left unsupplied, the Fetch API will be used. This option is available to support http mocking.
 * @param {Object} settings.convenienceApi [Optional] Mock or actual instance of the Relativity Forms convenienceApi or the portions of it needed by the test about to be run. While optional, tests are likely to fail if this is not provided, as undefined will be passed to the eventHandler construction if this isn't supplied.
 * @param {Object} settings.privilegedEnvelope [Optional] Object onto which the eventHandlers to be constructed may define their privileged data or functions. If not provided, undefined will be passed to the eventHandler iife. Utility of this envelope in tests depends upon the implementation in the iife.
 * @returns {Promise<Object<eventHandlers>>} A Promise which resolves into the eventHandlers object for the specified fileUrl.
 */
internals.createEventHandlersForFileUrl = (fileUrl, settings = {}) => {
	const fileTextContentPromise = internals.getFileTextContentWithSettings(fileUrl, settings);
	const eventHandlersPromise = fileTextContentPromise.then((fileTextContent) => {
		const eventHandlers = internals.createEventHandlersFromFileTextContent(
			fileTextContent,
			settings
		);
		return eventHandlers;
	});
	return eventHandlersPromise;
};

internals.expectEventHandlersSurfaceArea = (eventHandlers, expectedEventNames) => {
	const invalidEventNames = [];
	const missingEventHandlers = [];
	const eventNames = Object.keys(EVENT_NAMES).map((key) => { return EVENT_NAMES[key]; });
	expectedEventNames.forEach((expectedEventName) => {
		if (eventNames.findIndex((key) => { return (key === expectedEventName); }) < 0) {
			invalidEventNames.push(expectedEventName);
		}
		if (typeof eventHandlers[expectedEventName] !== "function") {
			missingEventHandlers.push(expectedEventName);
		}
	});
	expect(invalidEventNames.length).toBe(0, `The following are not valid event names: ${invalidEventNames.join(", ")}`);
	expect(missingEventHandlers.length).toBe(0, `The following functions are not present on the eventHandlers object: ${missingEventHandlers.join(", ")}`);
};

// eof

// Support for unit testing RDO Relativity Forms PageInteractionEventHandlers without Aurelia or ties / need to use EventHandlerManager

const internalsDynamic = {
	baseUrl: (void 0),
	getMockConvenienceApi: internals.getMockConvenienceApi,
	expectEventHandlersSurfaceArea: internals.expectEventHandlersSurfaceArea
};

/**
 * @desc Sets the baseUrl to be used for obtaining files.
 * @param {String|undefined} baseUrl The beginning part of the path to be used in file requests.
 * @returns {String|undefined} Returns the new value for baseUrl. This will be undefined if supplied baseUrl is falsy.
 */
internalsDynamic.setBaseUrl = (baseUrl) => {
	internalsDynamic.baseUrl = baseUrl || (void 0);
	return internalsDynamic.baseUrl;
};

/**
 * @desc Returns a fileUrl for the supplied fileName, inclusive of the current default baseUrl, or a settings.baseUrl, if supplied.
 * @param {String} fileName The name, or path relative to baseUrl, of the file from which to create event handlers.
 * @param {Object} settings [Optional] Object controlling portions of this function's execution.
 * @param {String} settings.baseUrl [Optional] A string to prepend to the fileName in the resulting Url. This may be supplied as an empty string to ignore the default baseUrl.
 * @returns {String} Returns the URL of the event handler file for the given fileName.
 */
internalsDynamic.getFileUrlForFileName = (fileName, settings = {}) => {
	const baseUrl = ((settings.hasOwnProperty("baseUrl") ? settings.baseUrl : internalsDynamic.baseUrl) || "");
	return `${baseUrl}${fileName}`;
};

/**
 * @desc Returns a Promise<Object<eventHandlers>> for the specified fileName.
 * @param {String} fileName The name, or path relative to baseUrl, of the file from which to create event handlers.
 * @param {Object} settings [Optional] Object containing execution options for obtaining event handler file content and transforming it into code.
 * @param {Object} settings.httpClient [Optional] An httpClient to use for fetching file content (it's expected to have a "get" method on it, and the Response object is expected to match the Fetch API). If left unsupplied, the Fetch API will be used. This option is available to support http mocking.
 * @param {Object} settings.convenienceApi [Optional] Mock or actual instance of the Relativity Forms convenienceApi or the portions of it needed by the test about to be run. While optional, tests are likely to fail if this is not provided, as undefined will be passed to the eventHandler construction if this isn't supplied.
 * @param {Object} settings.privilegedEnvelope [Optional] Object onto which the eventHandlers to be constructed may define their privileged data or functions. If not provided, undefined will be passed to the eventHandler iife. Utility of this envelope in tests depends upon the implementation in the iife.
 * @returns {Promise<Object<eventHandlers>>} A Promise which resolves into the eventHandlers object for the specified fileName.
 */
internalsDynamic.createEventHandlersForFileName = (fileName, settings = {}) => {
	const fileUrl = internalsDynamic.getFileUrlForFileName(fileName, settings);
	const eventHandlersPromise = internals.createEventHandlersForFileUrl(fileUrl, settings);
	return eventHandlersPromise.then((eventHandlers) => {
		expect(typeof eventHandlers).toBe("object", `createEventHandlersForFileName(${fileName}, ...) did not return an object.\nIs this file a well-formed immediately invoked function expression (iife)?\nBe sure the file's first line is the beginning of the iife, and not a comment or empty line.`);
		return eventHandlers;
	});
};

// eof

/**
 * @desc Returns a Promise<Object<eventHandlers>> for the specified fileName.
 * @param {String} fileName The name, or path relative to baseUrl, of the file from which to create event handlers.
 * @param {Object} settings [Optional] Object containing execution options for obtaining event handler file content and transforming it into code.
 * @param {Object} settings.httpClient [Optional] An httpClient to use for fetching file content (it's expected to have a "get" method on it, and the Response object is expected to match the Fetch API). If left unsupplied, the Fetch API will be used. This option is available to support http mocking.
 * @param {Object} settings.convenienceApi [Optional] Mock or actual instance of the Relativity Forms convenienceApi or the portions of it needed by the test about to be run. While optional, tests are likely to fail if this is not provided, as undefined will be passed to the eventHandler construction if this isn't supplied.
 * @param {Object} settings.privilegedEnvelope [Optional] Object onto which the eventHandlers to be constructed may define their privileged data or functions. If not provided, undefined will be passed to the eventHandler iife. Utility of this envelope in tests depends upon the implementation in the iife.
 * @returns {Promise<Object<eventHandlers>>} A Promise which resolves into the eventHandlers object for the specified fileName.
 */
const createEventHandlersForFileName = internalsDynamic.createEventHandlersForFileName;

/**
 * @desc Returns a newly-created mock of ONLY A PORTION OF the convenienceApi.
 * IF YOU USE THIS BE AWARE THAT SIZABLE GAPS MAY NEED TO BE FILLED IN ORDER FOR YOUR TESTS TO WORK CORRECTLY
 * THE RECOMMENDATION AT THIS TIME IS TO AVOID THIS FUNCTION UNTIL THERE IS FULLER SUPPORT FOR THE convenienceApi.
 * IN A beforeEach() MOCK WHAT YOU NEED AS YOU DISCOVER YOU NEED IT.
 * @returns {Object<MockConvenienceApi>} Returns a newly-created mock of ONLY A PORTION OF the convenienceApi.
 */
const getMockConvenienceApi = internalsDynamic.getMockConvenienceApi;

/**
 * @desc Sets the baseUrl to be used for obtaining files.
 * @param {String|undefined} baseUrl The beginning part of the path to be used in file requests.
 * @returns {String|undefined} Returns the new value for baseUrl. This will be undefined if supplied baseUrl is falsy.
 */
const setBaseUrl = internalsDynamic.setBaseUrl;

const expectEventHandlersSurfaceArea = internalsDynamic.expectEventHandlersSurfaceArea;

// eof

export { createEventHandlersForFileName, expectEventHandlersSurfaceArea, getMockConvenienceApi, setBaseUrl };
