import * as rdoEventHandlerTestHelpers from "../lib/rdoEventHandlerTestHelpers.js";

let eventHandlersPromise;

beforeAll(() => {
	rdoEventHandlerTestHelpers.setBaseUrl("base/src/");
	eventHandlersPromise = rdoEventHandlerTestHelpers.createEventHandlersForFileName(FILE_NAME, { baseUrl: "base/src/" });
});

describe("relativityFormsConversion.js event handlers", () => {
	const EXPECTED_SURFACE_AREA = [
		"createConsole"
	];
	const FILE_NAME = "relativityFormsConversion.js";

	it("has the expected surface area", (done) => {
		eventHandlersPromise.then((eventHandlers) => {
			rdoEventHandlerTestHelpers.expectEventHandlersSurfaceArea(eventHandlers, EXPECTED_SURFACE_AREA);
			done();
		}).catch(done.fail);
	});
});
