const routeData = [
	"const express = require('express');",
	"const router = express.Router();",
	"",
	`const ExamplesController = require("./examples.controller");`,
	"",
	`router.get("/", ExamplesController.getExamples);`,
	"",
	"module.exports = router;",
	"",
];

module.exports = routeData.join("\n");
