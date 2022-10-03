const fs = require("fs");
const path = require("path");
const templateService = require("../utils/template-service.js");

function generateRoute(configs, name) {
	const result = [];

	if (typeof name !== "string") {
		return ["error", "- You must define the name of the route."];
	}

	const nameLower = name.toLowerCase();
	const nameCap = nameLower.charAt(0).toUpperCase() + nameLower.slice(1);

	// make destination folder
	const destFolder = path.join(configs.srcFolder, configs.apiFolder, nameCap);
	fs.mkdirSync(destFolder, { recursive: true });

	// CONTROLLER FILE
	const controllerData = templateService.makeRouteController(
		nameCap,
		nameLower
	);

	const controllerFile = path.join(destFolder, nameLower + ".controller.js");
	fs.writeFileSync(controllerFile, controllerData.join("\n"));
	result.push(""); // empty line
	result.push(`===> Created file: ${controllerFile}`);

	// ROUTE FILE
	const routeData = templateService.makeRoute(nameCap, nameLower);
	const routeFile = path.join(destFolder, nameLower + ".routes.js");
	fs.writeFileSync(routeFile, routeData.join("\n"));
	result.push(`===> Created file: ${routeFile}`);

	// IMPORT CODE
	const importData = templateService.makeRouteImport(
		nameCap,
		nameLower,
		configs.apiPrefix
	);

	// UPDATE FILE
	try {
		const file = path.join(configs.srcFolder, configs.fileRequiringRoutes);
		const fileContent = fs.readFileSync(file, {
			encoding: "utf8",
		});

		// replace in ROUTE_PLACEHOLDER
		const updatedFileContent = fileContent.replace(
			"// ROUTE_PLACEHOLDER",
			importData.join("\n")
		);
		fs.writeFileSync(file, updatedFileContent);
		result.push(`===> Updated file: ${file} to include new routes`); // success
	} catch (error) {
		if (error.code === "ENOENT") {
			// show how to import code
			// result.push(showImport(importData).join("\n"));
			result.push(templateService.showImport(importData, "r").join("\n"));
		} else {
			throw error;
		}
	}
	return result;
}

module.exports = generateRoute;
