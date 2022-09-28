const parseColor = require("../lib/utils/parse-color.js");
const configs = require("../lib/configs/configs.js");

describe("parseColor() Test Suite", () => {
	it("should return default color if no color specified", () => {
		expect(parseColor(configs.bannerColor)).toEqual(configs.bannerColor);
	});

	it("should return default color if specified is invalid", () => {
		expect(parseColor(configs.bannerColor, "fakeColor")).toEqual(
			configs.bannerColor
		);
	});

	it("should return specified color", () => {
		const customColor = "red";
		expect(parseColor(configs.bannerColor, customColor)).toEqual(customColor);
	});
});
