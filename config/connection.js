// Global
const mysql = require("mysql");
//Create mysql connection and export to the database by the orm
var connection;

//Links to the Heroku Database
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

// Export connection for (Object Relational Mapper) ORM to use.
module.exports = connection;
