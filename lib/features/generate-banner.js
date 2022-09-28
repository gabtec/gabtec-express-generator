const fs = require("fs");
const path = require("path");
const parseColor = require("../utils/parse-color.js");
const templateService = require("../utils/template-service.js");

// function showImport(importData) {
// 	const result = [];
// 	result.push("===>");
// 	result.push(
// 		"===> You can use the following code to import banner into your project:"
// 	);
// 	result.push(
// 		"**************************************************************************"
// 	);
// 	result.push("");
// 	result.push(importData.slice(0, 4).join("\n"));
// 	// result.push(importData.join("\n"));
// 	result.push("");
// 	result.push(
// 		"**************************************************************************"
// 	);
// 	return result;
// }

function generateBanner(conf, text, color) {
	const result = [];

	if (typeof text !== "string") {
		return ["error", "- You must define the text to convert."];
	}

	const bannerColor = parseColor(conf.bannerColor, color);

	const asciiArt = templateService.makeAsciiArt(text);
	const bannerContent = templateService.makeBannerFile(asciiArt, bannerColor);

	const importData = templateService.makeBannerImport(
		conf.bannerFolder,
		conf.bannerFile
	);

	// make destination folder
	const destFolder = path.join(conf.srcFolder, conf.bannerFolder);
	fs.mkdirSync(destFolder, { recursive: true });

	// BANNER FILE
	const bannerFile = path.join(destFolder, conf.bannerFile);

	fs.writeFileSync(bannerFile, bannerContent.join("\n"));
	result.push(""); // empty line
	result.push(`===> Created file: ${bannerFile}`);

	// UPDATE FILE
	try {
		const file = path.join(conf.srcFolder, conf.fileRequiringBanner);
		const fileContent = fs.readFileSync(file, {
			encoding: "utf8",
		});

		// add on top
		const updatedFileContent = importData.join("\n") + "\n" + fileContent;

		fs.writeFileSync(file, updatedFileContent);
		result.push(`===> Updated file: ${file} to include new banner`); // success
	} catch (error) {
		if (error.code === "ENOENT") {
			// show how to import code
			// result.push(showImport(importData).join("\n"));
			result.push(templateService.showImport(importData, "b").join("\n"));
		} else {
			throw error;
		}
	}
	return result;
}

module.exports = generateBanner;
