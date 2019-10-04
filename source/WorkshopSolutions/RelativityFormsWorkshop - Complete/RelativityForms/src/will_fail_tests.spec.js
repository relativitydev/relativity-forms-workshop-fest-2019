import * as rdoEventHandlerTestHelpers from "../lib/rdoEventHandlerTestHelpers.js";

beforeAll(() => {
	rdoEventHandlerTestHelpers.setBaseUrl("base/src/");
});

xdescribe("will_fail_tests.js event handlers", () => {
	const FILE_NAME = "will_fail_tests.js";

	it("can create an event handlers object", (done) => {
		rdoEventHandlerTestHelpers.createEventHandlersForFileName(FILE_NAME, { baseUrl: "base/src/" }).then(done).catch(done.fail);
	});
});
