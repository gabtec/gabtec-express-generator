const pkj = require("../../package.json");

const alias = Object.keys(pkj.bin)[0];

function showUsage() {
	const lines = [
		"",
		`Package: @gabtec/express-generator`,
		`Usage: ${alias} <module> <args...>`,
		"  Modules:",
		"    -b | --banner Text [color] \tGenerates a new MOTD banner",
		"    -r | --route Name \tGenerates a new REST endpoint",
		"  Options:",
		"    -h | --help \tPackahe Usage",
		"    -v | --version \tPackage version",
	];

	// return lines.join("\n");
	return lines;
}

module.exports = showUsage;
