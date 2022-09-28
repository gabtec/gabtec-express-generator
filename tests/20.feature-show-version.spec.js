const packageJson = require("../package.json");
const showVersion = require("../lib/features/show-version.js");

describe("showVersion() Test Suite", () => {
	it("should return an array with version string", () => {
		const result = showVersion();
		const expectedResult = `Version: ${packageJson.name}:v${packageJson.version}`;

		expect(result).toBeInstanceOf(Array);
		expect(result).toHaveLength(2);
		expect(result[0]).toContain("");
		expect(result[1]).toContain(expectedResult);
	});
});
