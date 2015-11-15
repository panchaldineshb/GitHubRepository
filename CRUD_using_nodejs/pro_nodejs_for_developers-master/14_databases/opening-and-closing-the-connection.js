// end() ends the connection gracefully, allowig any queued queries to execute

var mysql = require("mysql");
var connection = mysql.createConnection("mysql://username:secret@localhost/dbname");

connection.connect(function(error){
	if (error) {
		return console.error(error);
	}

	connection.end(function(error){
		if (error) {
			return console.error(error);
		}
	});
});


// destroy() immediately shuts down the underlying socket
connection.connect(function(error){
	if (error) {
		return console.error(error);
	}

	connection.destroy();
});