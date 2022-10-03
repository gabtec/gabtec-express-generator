const routeData = [
	"const express = require('express');",
	"const router = express.Router();",
	"",
	`const ExamplesController = require("./examples.controller.js");`,
	"",
	`router.get("/", ExamplesController.getExamples);`,
	"",
	"module.exports = router;",
	"",
];

module.exports = routeData.join("\n");
