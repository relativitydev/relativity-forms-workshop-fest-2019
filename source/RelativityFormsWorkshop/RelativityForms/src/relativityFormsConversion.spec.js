import * as rdoEventHandlerTestHelpers from "../lib/rdoEventHandlerTestHelpers.js";

const FILE_NAME = "relativityFormsConversion.js";
let eventHandlersPromise;

// Common test-setup, runs before every test in the file
beforeAll(() => {
	// telling rdoEventHandlerTestHelpers how to find my code
	rdoEventHandlerTestHelpers.setBaseUrl("base/src/");

	// start the start pulling the code and turning it into an eventHandlers object
	eventHandlersPromise = rdoEventHandlerTestHelpers.createEventHandlersForFileName(FILE_NAME, { baseUrl: "base/src/" });
});

// Describe is a logical grouping of tests and describes. Here, "All of the relativityFormsConversion tests"
describe(`${FILE_NAME} relativityFormsConversion.js event handlers`, () => {
	const EXPECTED_SURFACE_AREA = [	"createConsole"	];

	// Surface area test ensures expected EH implementations are present.
	// the creation of event handlers in the beforeEach will fail prior to this,
	// if for some reason the conversion from text to object didn't work.
	it("has the expected surface area", (done) => {
		eventHandlersPromise.then((eventHandlers) => {
			rdoEventHandlerTestHelpers.expectEventHandlersSurfaceArea(eventHandlers, EXPECTED_SURFACE_AREA);
			done();
		}).catch(done.fail);
	});
});
