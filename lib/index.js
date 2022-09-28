const path = require("path");
const features = require("./features/_index.js");
const defaultConfigs = require("./configs/configs.js");
const customConfigFilename = ".gegen.config.js";

function getConfigs(custom) {
	if (!custom) return defaultConfigs;

	if (typeof custom === "string") {
		const fullPath = path.join(process.env.PWD, custom);
		let userConfigs;
		try {
			// userConfigs = require(process.env.PWD + ".gegen.config.js");
			userConfigs = require(fullPath);
		} catch (err) {
			userConfigs = undefined;
		}
		return { ...defaultConfigs, ...userConfigs };
	}

	if (typeof custom === "object") {
		return { ...defaultConfigs, ...custom };
	}
}

/**
 *
 * @param {Array} args - A list of parameters, in form of an array
 */
function init(args) {
	const configs = getConfigs(customConfigFilename);
	// if no args, show help
	if (!args) {
		args = ["-h"];
	}

	let result = undefined;
	let showOutputHeader = true;

	switch (args[0]) {
		case "-v":
		case "--version":
			showOutputHeader = false;
			result = features.showVersion();
			break;
		case "-b":
		case "--banner":
			result = features.generateBanner(configs, ...args.slice(1));
			break;
		case "-r":
		case "--route":
			result = features.generateRoute(configs, ...args.slice(1));
			break;
		case "-h":
		case "--help":
		default:
			showOutputHeader = false;
			result = features.showHelp();
	}

	const hasErrors = result[0] === "error" ? true : false;
	result = result.slice(1);

	if (showOutputHeader) {
		if (hasErrors) {
			console.log("\x1b[31m%s\x1b[0m", "\n==== Error ====");
		} else {
			console.log("\x1b[32m%s\x1b[0m", "\n==== Success ====");
		}
	}
	console.log(result.join("\n"));
}

module.exports = { init, getConfigs };
