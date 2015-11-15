var mysql = require("mysql");

// one way to create connection
var connection = mysql.createConnection({
	"host": "localhost",
	"port": 3306,
	"user": "username",
	"password": "secret",
	"database": "dbname"
});

// second way to create connection
var connection = mysql.createConnection("mysql://username:secret@localhost:3306/dbname");

// use created connection
connection.connect(function(error){
	if(error) {
		return console.error(error);
	}
	// Connection successfully established
});