var mysql = require("mysql");
// Options for createPool
// - createConnection - function to user when creating pool connections
// - connectionLimit - max number odf connections that can be created at once, deafult=10
// - queueLimit - maz number of connection requests that can be queued by the pool, 0=no limit
// - waitForConnections - if true requests are added to queue if there are no connections

var pool = mysql.createPool({
	"host": "localhost",
	"user": "username",
	"password": "secret",
	"databse": "dbname"
});