const controllerData = [
	"module.exports = {",
	`  getExamples,`,
	"};",
	"",
	`// GET /examples`,
	`async function getExamples(req, res, next) {`,
	"  try {",
	"    // const data = await db.get....",
	"  } catch(e) {",
	"    next(e);",
	"  }",
	"}",
	"",
];

module.exports = controllerData.join("\n");
