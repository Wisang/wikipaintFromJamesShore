desc("Example!");
task("example", ["dependency"], function () {
    console.log("testing jake");
});

task("dependency", function () {
    console.log("inner dependency");
});