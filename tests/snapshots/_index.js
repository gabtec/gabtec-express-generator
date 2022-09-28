// const bannerDefaultSnap = require("./banner.default.snap.js");
// const bannerGreenSnap = require("./banner.green.snap.js");
// const bannerDefaultNoArtSnap = require("./banner.default.no.art.snap.js");
// const bannerGreenNoArtSnap = require("./banner.green.no.art.snap.js");
const bannerImportSnap = require("./banner-import.snap.js");

const routeControllerSnap = require("./route-controller.snap.js");
const routeSnap = require("./route.snap.js");
const routeImportSnap = require("./route-import.snap.js");

const asciiSnap = require("./ascii.snap.js");

module.exports = {
	asciiSnap,
	// with figlet art
	// bannerDefaultSnap,
	// bannerGreenSnap,
	// // with no art
	// bannerDefaultNoArtSnap,
	// bannerGreenNoArtSnap,
	bannerImportSnap,

	routeSnap,
	routeControllerSnap,
	routeImportSnap,
};
