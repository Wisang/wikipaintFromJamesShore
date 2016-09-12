task("default", ["Lint"]);

desc("Lint Everything");
task("Lint", [], function () {
    var lint = require("./build/lint/lint_runner.js");
    lint.validateFile("jakefile.js", {}, {});
});