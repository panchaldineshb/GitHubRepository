var sum = 0;

process.stdin.on("data", function(data) {
    var number = parseInt(data.toString(), 10);
    
    if(isFinite(number)) {
        sum += number;
    }
    
    console.log(sum);
});

process.stdin.resume();