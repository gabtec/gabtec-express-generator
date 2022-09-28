const pkj = require("../../package.json");

function showVersion() {
	return ["", `Version: ${pkj.name}:v${pkj.version}`];
}

module.exports = showVersion;
