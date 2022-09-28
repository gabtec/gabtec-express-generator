const importData = [
	'require("colors");',
	'const VERSION = require("./package.json").version;',
	'const banner = require("./src/assets/banner.js");',
	'banner.print("api v" + VERSION);',
];

module.exports = importData.join("\n");
