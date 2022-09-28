const templateService = require("../lib/utils/template-service.js");
const testSnapshots = require("./snapshots/_index.js");

describe("makeAsciiArt() Test Suite", () => {
	it("should make ascii art using figlet lib", () => {
		const banner = templateService.makeAsciiArt("someText");
		expect(banner).toContain(testSnapshots.asciiSnap);
	});
});
