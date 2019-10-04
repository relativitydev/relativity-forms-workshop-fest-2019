import * as rdoEventHandlerTestHelpers from "../lib/rdoEventHandlerTestHelpers.js";

beforeAll(() => {
	rdoEventHandlerTestHelpers.setBaseUrl("base/src/");
});

describe("relativityFormsConversion.js event handlers", () => {
	const EXPECTED_SURFACE_AREA = [
		"createConsole",
		"hydrateLayoutComplete",
		"pageInteraction"
	];
	const FILE_NAME = "relativityFormsConversion.js";

	it("has the expected surface area", (done) => {
		rdoEventHandlerTestHelpers.createEventHandlersForFileName(FILE_NAME, { baseUrl: "base/src/" }).then((eventHandlers) => {
			rdoEventHandlerTestHelpers.expectEventHandlersSurfaceArea(eventHandlers, EXPECTED_SURFACE_AREA);
			done();
		}).catch(done.fail);
	});
});
