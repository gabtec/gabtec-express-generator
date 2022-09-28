// accepted colors: https://www.npmjs.com/package/colors
const allowedColors = [
	"black",
	"red",
	"green",
	"yellow",
	"blue",
	"magenta",
	"cyan",
	"white",
	"gray",
	"grey",
];

module.exports = function (defaultColor, color) {
	if (!color) {
		return defaultColor;
	}

	if (allowedColors.includes(color)) {
		return color;
	} else {
		return defaultColor;
	}
};
