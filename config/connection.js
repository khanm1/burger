// Global
const mysql = require("mysql");
// Connect
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "Mohammad",
    password: "Password",
    database: "burgers_db"
});
