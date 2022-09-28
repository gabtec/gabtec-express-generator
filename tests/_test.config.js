// const configs = {
// 	// Folder names
// 	srcFolder: "./tests/temp/",
// 	bannerFolder: "assets/", //must not start with ./
// 	apiFolder: "api/",
// 	// filenames
// 	bannerFile: "banner.js",
// 	bannerImportFilename: "import-banner-example.js",
// 	routeImportFilename: "import-routes-example.js",
// 	fileRequiringRoutes: "api.js",
// 	fileRequiringBanner: "server.js",
// 	// folders
// 	bannerFolderToImport: function () {
// 		return "./" + this.bannerFolder;
// 	},
// 	apiFilePath: function () {
// 		return this.srcFolder + this.fileRequiringRoutes;
// 	},
// 	serverFilePath: function () {
// 		return this.srcFolder + this.fileRequiringBanner;
// 	},
// 	apiAltFilePath: function () {
// 		return this.srcFolder + this.routeImportFilename;
// 	},
// 	serverAltFilePath: function () {
// 		return this.srcFolder + this.bannerImportFilename;
// 	},
// 	// api versioning
// 	apiPrefix: "/api/v1/",
// 	// colors
// 	bannerColor: "magenta",
// 	// accepted colors: https://www.npmjs.com/package/colors
// 	allowedColors: [
// 		"black",
// 		"red",
// 		"green",
// 		"yellow",
// 		"blue",
// 		"magenta",
// 		"cyan",
// 		"white",
// 		"gray",
// 		"grey",
// 	],
// 	figletOptions: {
// 		font: "Standard", // default: Standard
// 		horizontalLayout: "default",
// 		// horizontalLayout: "fitted", // "default", "fitted", "full"
// 	},
// 	// bannerFolder: srcFolder + bannerFolder,
// 	// apiEndpointsFolder: srcFolder + apiFolder,
// };

// module.exports = {
// 	...configs,
// };

module.exports = {
	srcFolder: "tests/temp/src/",
	bannerFolder: "assets/",
	apiFolder: "api/",
	bannerFile: "banner.js",
	fileRequiringRoutes: "api.js",
	fileRequiringBanner: "server.js",
	apiPrefix: "/api/v1/",
	bannerColor: "magenta",
};
