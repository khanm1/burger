// Set up MySQL connection.
const mysql = require("mysql");
const connection;

//Links to the Heroku DB add on
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "Mohammad",
		password: "Rafika112575",
		database: "burgers_db"
	});
}

// Make connection.
connection.connect(err => {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
