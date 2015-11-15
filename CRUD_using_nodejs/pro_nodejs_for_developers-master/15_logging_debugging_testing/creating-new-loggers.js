var winston = require("winston");
var logger = new winston.Logger({
	transports: [
		new winston.transports.Console({
			colorize: true
		}),
		new winston.transports.File({
			level: "error",
			filename: "output.log"
		})
	]
});

logger.info("foo");
logger.error("bar");