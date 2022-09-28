const showHelp = require("../lib/features/show-help.js");

describe("showHelp() Test Suite", () => {
	it("should return an array with usage instructions", () => {
		const result = showHelp();
		const size = result.length;
		expect(result).toBeInstanceOf(Array);
		expect(result).toHaveLength(9);

		expect(result[size - 1]).toContain("-v | --version");
		expect(result[size - 2]).toContain("-h | --help");
		expect(result[size - 4]).toContain("-r | --route");
		expect(result[size - 5]).toContain("-b | --banner");
	});
});
