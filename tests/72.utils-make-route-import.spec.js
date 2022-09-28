const templateService = require("../lib/utils/template-service.js");
const testSnapshots = require("./snapshots/_index.js");
const testConfigs = require("./_test.config.js");

describe("makeImport() Test Suite", () => {
	it("should match expected snapshot banner", () => {
		const fileData = templateService.makeRouteImport(
			"Examples",
			"examples",
			testConfigs.apiPrefix
		);
		expect(fileData.join("\n")).toEqual(testSnapshots.routeImportSnap);
	});
});
