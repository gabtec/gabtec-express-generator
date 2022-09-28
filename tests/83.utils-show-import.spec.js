const templateService = require("../lib/utils/template-service.js");

const inData = ["some code", ""];

describe("showImport() Test Suite", () => {
	it("should match expected output for banner", () => {
		const res = templateService.showImport(inData, "b");

		expect(res[0]).toContain("===>");
		expect(res[1]).toContain(
			"===> You can use the following code to import new banner into your project:"
		);
		expect(res[2]).toMatch("*******");
		expect(res[3]).toEqual("");
		expect(res[4]).toMatch("some code");
		expect(res[5]).toEqual("");
		expect(res[6]).toMatch("*******");
	});

	it("should match expected output for route", () => {
		const res = templateService.showImport(inData, "r");

		expect(res[0]).toContain("===>");
		expect(res[1]).toContain(
			"===> You can use the following code to import new files into your project:"
		);
		expect(res[2]).toMatch("*******");
		expect(res[3]).toEqual("");
		expect(res[4]).toMatch("some code");
		expect(res[5]).toEqual("");
		expect(res[6]).toMatch("*******");
	});
});
