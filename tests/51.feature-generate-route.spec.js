const fs = require("fs");

jest.mock("fs", () => {
	return {
		readFileSync: jest.fn(),
		writeFileSync: jest.fn(),
		mkdirSync: jest.fn(),
	};
});
const generateRoute = require("../lib/features/generate-route.js");

const testConfigs = require("./_test.config.js");

afterEach(() => {
	jest.clearAllMocks();
});

describe("generateRoute() Test Suite", () => {
	describe("when it fails rigth on the begining", () => {
		it("should require a route name parameter", () => {
			const result = generateRoute();
			expect(result[0]).toEqual("error"); // error
			expect(result[1]).toEqual("- You must define the name of the route."); // error
		});
	});

	describe("when ./src/api.js file is FOUND", () => {
		it("should generate controller and route file, and update api.js update", () => {
			fs.readFileSync.mockImplementation(() => {
				return "some text";
			});
			const result = generateRoute(testConfigs, "name");

			expect(fs.mkdirSync).toHaveBeenCalledTimes(1);
			expect(fs.mkdirSync.mock.calls[0][0]).toMatch("src/api");

			expect(fs.writeFileSync).toHaveBeenCalledTimes(3);

			expect(fs.writeFileSync.mock.calls[0][0]).toMatch(".controller.js");
			expect(fs.writeFileSync.mock.calls[1][0]).toMatch(".route.js");

			// console.log(readSpy.mock);
			expect(fs.readFileSync).toHaveBeenCalledTimes(1);

			// expect(result[0]).not.toEqual("error"); // error
			expect(result[1]).toEqual(
				"===> Created file: tests/temp/src/api/Name/name.controller.js"
			);
			expect(result[2]).toEqual(
				"===> Created file: tests/temp/src/api/Name/name.route.js"
			);
			expect(result[3]).toEqual(
				"===> Updated file: tests/temp/src/api.js to include new routes"
			);
		});
	});

	describe("when ./src/api.js file is NOT FOUND", () => {
		it("should generate controller and route file, no api.js update", () => {
			fs.readFileSync.mockImplementation(() => {
				const err = new Error("force error");
				err.code = "ENOENT";
				throw err;
			});

			const result = generateRoute(testConfigs, "name");

			expect(fs.mkdirSync).toHaveBeenCalledTimes(1);
			expect(fs.mkdirSync.mock.calls[0][0]).toMatch("src/api");

			expect(fs.writeFileSync).toHaveBeenCalledTimes(2);
			expect(fs.writeFileSync.mock.calls[0][0]).toMatch(".controller.js");
			expect(fs.writeFileSync.mock.calls[1][0]).toMatch(".route.js");

			expect(fs.readFileSync).toHaveBeenCalledTimes(1);

			// expect(result[0]).not.toEqual("error"); // error
			expect(result[1]).toEqual(
				"===> Created file: tests/temp/src/api/Name/name.controller.js"
			);
			expect(result[2]).toEqual(
				"===> Created file: tests/temp/src/api/Name/name.route.js"
			);
			expect(result[3]).toMatch(
				"You can use the following code to import new files into your project:"
			);
		});
	});
});
