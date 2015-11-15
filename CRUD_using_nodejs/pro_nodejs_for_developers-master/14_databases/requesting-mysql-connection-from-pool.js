var mysql = require("mysql");
var pool = mysql.createPool({
	"host": "localhost",
	"user": "username",
	"password": "secret",
	"databse": "dbname"
});

pool.getConnection(function(error, connection){
	if (error) {
		return console.error(error);
	}
	// Connection available for use
});