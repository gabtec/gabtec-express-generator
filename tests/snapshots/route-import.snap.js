const importData = [
	`const ExamplesRoutes = require("./api/examples/examples.routes.js");`,
	`app.use("/api/v1/examples", ExamplesRoutes);`,
	"// ROUTE_PLACEHOLDER",
	"",
];

module.exports = importData.join("\n");
