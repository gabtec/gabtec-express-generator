const templateService = require("../lib/utils/template-service.js");
const testSnapshots = require("./snapshots/_index.js");

describe("makeBannerImport() Test Suite", () => {
	it("should match expected import snapshot", () => {
		const banner = templateService.makeBannerImport("src/assets", "/banner.js");
		// console.log(banner);
		expect(banner.join("\n")).toContain(testSnapshots.bannerImportSnap);
	});
});
