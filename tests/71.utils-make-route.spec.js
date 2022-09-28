const templateService = require("../lib/utils/template-service.js");
const testSnapshots = require("./snapshots/_index.js");

describe("makeRoute() Test Suite", () => {
	it("should match expected snapshot banner", () => {
		const fileData = templateService.makeRoute("Examples", "examples");
		expect(fileData.join("\n")).toEqual(testSnapshots.routeSnap);
	});
});
