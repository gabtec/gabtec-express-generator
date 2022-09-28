const figlet = require("figlet");

module.exports = {
	makeAsciiArt,
	makeBannerFile,
	makeBannerImport,
	makeRoute,
	makeRouteController,
	makeRouteImport,
	showImport,
};

function makeBannerFile(motd, color) {
	const bannerContent = [
		'require("colors");',
		"",
		"const banner = `",
		`${motd}\`;`,
		"",
		"function print(suffix) {",
		'  const append = suffix ? suffix : "";',
		'  const fullBanner = banner + " " + append + "\\n";',
		`  console.log(fullBanner.${color});`,
		"};",
		"",
		"module.exports = { print };",
	];

	return bannerContent;
}

const figletOptions = {
	font: "Standard", // default: Standard
	horizontalLayout: "default",
	// horizontalLayout: "fitted", // "default", "fitted", "full"
};

function makeAsciiArt(text, figletOptions) {
	const asciiString = figlet.textSync(text, figletOptions);
	const asciiStringMod1 = asciiString.replaceAll("\\", "\\\\");
	const asciiStringMod2 = asciiStringMod1.replaceAll("`", "\\`");

	return asciiStringMod2 || "error";
}

function makeBannerImport(folder, filename) {
	const content = [
		'require("colors");',
		'const VERSION = require("./package.json").version;',
		`const banner = require("./${folder}${filename}");`,
		'banner.print("api v" + VERSION);',
		"",
	];

	return content;
}

function makeRouteController(nameCap, nameLower) {
	const controllerData = [
		"module.exports = {",
		`  get${nameCap},`,
		"};",
		"",
		`// GET /${nameLower}`,
		`async function get${nameCap}(req, res, next) {`,
		"  try {",
		"    // const data = await db.get....",
		"  } catch(e) {",
		"    next(e);",
		"  }",
		"}",
		"",
	];

	return controllerData;
}

function makeRoute(nameCap, nameLower) {
	const routeData = [
		"const express = require('express');",
		"const router = express.Router();",
		"",
		`const ${nameCap}Controller = require("./${nameLower}.controller");`,
		"",
		`router.get("/", ${nameCap}Controller.get${nameCap});`,
		"",
		"module.exports = router;",
		"",
	];

	return routeData;
}

function makeRouteImport(nameCap, nameLower, prefix) {
	const importData = [
		`const ${nameCap}Routes = require("./api/${nameLower}/${nameLower}.routes.js");`,
		`app.use("${prefix}${nameLower}", ${nameCap}Routes);`,
		"// ROUTE_PLACEHOLDER",
		"",
	];

	return importData;
}

// flag b=banner, r=route
function showImport(importData, flag) {
	const result = [];
	const title = flag === "b" ? "new banner" : "new files";
	const sliceSize = flag === "b" ? 4 : 2;

	result.push("===>");
	result.push(
		`===> You can use the following code to import ${title} into your project:`
	);
	result.push(
		"**************************************************************************"
	);
	result.push("");
	result.push(importData.slice(0, sliceSize).join("\n"));
	result.push("");
	result.push(
		"**************************************************************************"
	);
	return result;
}
