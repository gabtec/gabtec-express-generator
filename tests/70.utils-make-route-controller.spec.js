const templateService = require("../lib/utils/template-service.js");
const testSnapshots = require("./snapshots/_index.js");

describe("makeRouteController() Test Suite", () => {
	it("should match expected snapshot banner", () => {
		const fileData = templateService.makeRouteController(
			"Examples",
			"examples"
		);
		expect(fileData.join("\n")).toEqual(testSnapshots.routeControllerSnap);
	});
});
