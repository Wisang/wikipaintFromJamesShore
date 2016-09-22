/*global desc, task, jake, fail, complete */
(function() {
    "use strict";

    task("default", ["Lint"]);

    desc("Lint Everything");

    function nodeLintOptions() {
        var options = {
            bitwise: true,
            curly: false,
            eqeqeq: true,
            forin: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            noempty: true,
            nonew: true,
            regexp: true,
            undef: true,
            strict: true,
            trailing: true,
            node: true
        };
        return options;
    }

    task("Lint", [], function () {
        var lint = require("./build/lint/lint_runner.js");

        var files = new jake.FileList();
        files.include("**/*.js");
        files.exclude("node_modules");
        files.exclude("build/lint/_lint_runner_test.js");
        //var options = nodeLintOptions();
        var passed = lint.validateFileList(files.toArray(), nodeLintOptions(), {});
        if(!passed) fail("lint failed");
    });

    desc("Integrate");
    task("Integrate", ["default"], function () {
        console.log("jake at master");
        console.log("if jake fails, Stop & Try again");
        console.log("commit and push");
        console.log("Make sure Git Status is clean");
        console.log("git checkout integration");
        console.log("git merge master  --no-ff --log");
        console.log("jake");
        console.log("if jake fails, Stop & Try again");
        console.log("git checkout master");

        // console.log("push to Master");
        // console.log("checkout");

    });

}());