const templateService = require("../lib/utils/template-service.js");

describe("makeBannerFile() Test Suite", () => {
	it("should match expected default snapshot banner", () => {
		const banner = templateService.makeBannerFile("art", "magenta");
		const size = banner.length;
		// console.log(banner);
		expect(banner[size - 1]).toContain("module.exports = { print };");
		expect(banner[size - 4]).toContain("  console.log(fullBanner.magenta);");
		expect(banner[size - 5]).toMatch(
			'const fullBanner = banner + " " + append '
		);
		expect(banner[size - 6]).toMatch('const append = suffix ? suffix : "";');

		expect(banner[0]).toContain('require("colors");');
	});
});
