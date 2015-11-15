var winston = require("winston");

winston
    .remove(winston.transports.Console)
    .add(winston.transports.Console, {
       level: "error",
       colorize: true,
       timestamp: true
    });
    
winston.info("test info");
winston.error("test error");