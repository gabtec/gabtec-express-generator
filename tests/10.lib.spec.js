const features = require("../lib/features/_index.js");
const gegen = require("../lib/index.js").init;

const helpSpy = jest
	.spyOn(features, "showHelp")
	.mockImplementation(() => ["", "testing"]);

const versionSpy = jest
	.spyOn(features, "showVersion")
	.mockImplementation(() => ["", "testing"]);

const bannerSpy = jest
	.spyOn(features, "generateBanner")
	.mockImplementation(() => ["", "testing"]);

const routerSpy = jest
	.spyOn(features, "generateRoute")
	.mockImplementation(() => ["", "testing"]);

describe("Lib Test Suite", () => {
	afterEach(() => {
		versionSpy.mockClear();
		helpSpy.mockClear();
		bannerSpy.mockClear();
		routerSpy.mockClear();
	});

	it("should call showHelp if no arg", () => {
		gegen();

		expect(helpSpy).toHaveBeenCalledTimes(1);
		expect(helpSpy).toHaveBeenCalledWith();
	});

	it("should call showVersion if arg '-v'", () => {
		gegen(["-v"]);

		expect(versionSpy).toHaveBeenCalledTimes(1);
		expect(versionSpy).toHaveBeenCalledWith();
	});

	it("should call showVersion if arg '--version'", () => {
		gegen(["--version"]);

		expect(versionSpy).toHaveBeenCalledTimes(1);
		expect(versionSpy).toHaveBeenCalledWith();
	});

	it("should call showHelp if arg '-h'", () => {
		gegen(["-h"]);

		expect(helpSpy).toHaveBeenCalledTimes(1);
		expect(helpSpy).toHaveBeenCalledWith();
	});

	it("should call showHelp if arg '--help'", () => {
		gegen(["--help"]);

		expect(helpSpy).toHaveBeenCalledTimes(1);
		expect(helpSpy).toHaveBeenCalledWith();
	});

	it("should call generateBanner if arg '-b'", () => {
		gegen(["-b", "someText", "red"]);

		expect(bannerSpy).toHaveBeenCalledTimes(1);
	});

	it("should call generateBanner if arg '--banner'", () => {
		gegen(["--banner", "someText", "red"]);

		expect(bannerSpy).toHaveBeenCalledTimes(1);
	});

	it("should call generateBanner with params: configs / text / color", () => {
		gegen(["-b", "someText", "red"]);

		expect(bannerSpy).toHaveBeenCalledTimes(1);
		expect(bannerSpy.mock.calls[0][0]).toHaveProperty("bannerFolder"); // just one prop for example
		expect(bannerSpy.mock.calls[0][1]).toEqual("someText");
		expect(bannerSpy.mock.calls[0][2]).toEqual("red");
	});

	it("should call generateRoute if arg '-r'", () => {
		gegen(["-r", "someName"]);

		expect(routerSpy).toHaveBeenCalledTimes(1);
	});

	it("should call generateRoute if arg '--route'", () => {
		gegen(["--route", "someName"]);

		expect(routerSpy).toHaveBeenCalledTimes(1);
	});

	it("should call generateRoute with params: configs / name ", () => {
		gegen(["-r", "someName"]);

		expect(routerSpy).toHaveBeenCalledTimes(1);
		expect(routerSpy.mock.calls[0][0]).toHaveProperty("apiFolder"); // just one prop for example
		expect(routerSpy.mock.calls[0][1]).toEqual("someName");
	});

	it("should print error header", () => {
		gegen(["-b"]);

		expect(bannerSpy).toHaveBeenCalledTimes(1);
	});

	it("should print success header", () => {
		gegen(["--route", "someName"]);

		expect(routerSpy).toHaveBeenCalledTimes(1);
	});
});
