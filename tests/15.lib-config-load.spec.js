const getConfigs = require("../lib/index.js").getConfigs;
const defaultConfigs = require("../lib/configs/configs.js");

describe("Lib config Test Suite", () => {
	it("should use default configs if no arg", () => {
		const conf = getConfigs();

		expect(conf).toEqual(defaultConfigs);
	});

	it("should use default configs if no 'gegen.config.js' file found", () => {
		const conf = getConfigs("fakeFile");

		expect(conf).toEqual(defaultConfigs);
	});

	it("should use inline configs if arg an object", () => {
		const conf = getConfigs({ bannerColor: "pink" });
		const newConf = { ...defaultConfigs };
		newConf.bannerColor = "pink";
		expect(conf).toEqual(newConf);
	});

	it("should replace default configs with new ones if 'gegen.config.js' file found", () => {
		const conf = getConfigs(".gegen.config.js.example");
		expect(conf).not.toEqual(defaultConfigs);
		expect(conf.bannerColor).toEqual("white");
	});
});
