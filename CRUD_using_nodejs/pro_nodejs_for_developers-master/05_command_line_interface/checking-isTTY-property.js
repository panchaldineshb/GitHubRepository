console.warn("stdin  = " + process.stdin.isTTY);
console.warn("stdout = " + process.stdout.isTTY);
console.warn("stderr = " + process.stderr.isTTY);

// Different values will be printed when exewcuting the script normally
// and when redirecting the stdout to file:
//
// node checking-isTTY-property.js > output.txt


