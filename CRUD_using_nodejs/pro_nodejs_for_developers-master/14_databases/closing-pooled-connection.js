// release() - returns the connection to the pool
// destroy() - terminates the conenction and removes it from the pool, next time when new connection
//             is requested the pool will create a new one to replace the destroyed one

var mysql = require("mysql");
var pool = mysql.createPool({
	"host": "localhost",
	"user": "username",
	"password": "secret",
	"database": "dbname"
});

pool.getConnection(function(error, connection){
	if (error) {
		return console.error(error);
	}

	connection.release();
});