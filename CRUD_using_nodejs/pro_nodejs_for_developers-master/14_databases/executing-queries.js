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

	var sql = "SELECT * FROM Person";
	//var sql = "DELET FROM People";
	
	connection.query(sql, function(error, results){
		if (error) {
			return console.error(error);
		}

		console.log(results);
		connection.release();
	});
});