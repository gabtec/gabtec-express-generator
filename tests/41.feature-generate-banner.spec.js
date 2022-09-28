const fs = require("fs");
const figlet = require("figlet");

jest.mock("fs", () => {
	return {
		readFileSync: jest.fn(),
		writeFileSync: jest.fn(),
		mkdirSync: jest.fn(),
	};
});

jest.mock("figlet", () => {
	return {
		textSync: jest.fn().mockReturnValue("motd"),
	};
});

const generateBanner = require("../lib/features/generate-banner.js");

const testConfigs = require("./_test.config.js");

afterEach(() => {
	jest.clearAllMocks();
});

describe("generateBanner() Test Suite", () => {
	describe("when it fails rigth on the begining", () => {
		it("should require a text banner parameter", () => {
			const result = generateBanner();
			expect(result[0]).toEqual("error"); // error
			expect(result[1]).toEqual("- You must define the text to convert."); // error
		});
	});

	describe("when ./src/server.js file is FOUND", () => {
		it("should generate banner file, and update server.js", () => {
			fs.readFileSync.mockImplementation(() => {
				return "some text";
			});
			const result = generateBanner(testConfigs, "someText");

			expect(fs.mkdirSync).toHaveBeenCalledTimes(1);
			expect(fs.mkdirSync.mock.calls[0][0]).toMatch("src/assets");

			expect(fs.writeFileSync).toHaveBeenCalledTimes(2);

			expect(fs.writeFileSync.mock.calls[0][0]).toMatch("banner.js");

			// console.log(readSpy.mock);
			expect(fs.readFileSync).toHaveBeenCalledTimes(1);

			// expect(result[0]).not.toEqual("error"); // error
			expect(result[1]).toEqual(
				"===> Created file: tests/temp/src/assets/banner.js"
			);
			expect(result[2]).toEqual(
				"===> Updated file: tests/temp/src/server.js to include new banner"
			);
		});
	});

	describe("when ./src/server.js file is NOT FOUND", () => {
		it("should generate banner file, no server.js update", () => {
			fs.readFileSync.mockImplementation(() => {
				const err = new Error("force error");
				err.code = "ENOENT";
				throw err;
			});

			const result = generateBanner(testConfigs, "someText");

			expect(fs.mkdirSync).toHaveBeenCalledTimes(1);
			expect(fs.mkdirSync.mock.calls[0][0]).toMatch("src/assets");

			expect(fs.writeFileSync).toHaveBeenCalledTimes(1);
			expect(fs.writeFileSync.mock.calls[0][0]).toMatch("banner.js");

			expect(fs.readFileSync).toHaveBeenCalledTimes(1);

			// expect(result[0]).not.toEqual("error"); // error
			expect(result[1]).toEqual(
				"===> Created file: tests/temp/src/assets/banner.js"
			);
			expect(result[2]).toMatch(
				"You can use the following code to import new banner into your project:"
			);
		});
	});
});
