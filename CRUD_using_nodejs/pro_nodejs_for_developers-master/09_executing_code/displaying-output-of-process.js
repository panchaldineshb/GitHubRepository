var cp = require("child_process");

// exec() spawns new sheel
cp.exec("ls -l /", function(error, stdout, stderr) {
    if (error) {
        console.error(error.toString());
    } else if (stderr !== "") {
        console.error(stderr);
    } else {
        console.log(stdout);
    }
});