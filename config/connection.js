// Global
const mysql = require("mysql");
// Connect
var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
else{
    connection = mysql.createConnection({
        post: 3000,
        host: "localhost",
        user: "Mohammad",
        password: "Rafika112575",
        database: "burgers_db"
    });
};
connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
// Export Connection
module.exports = connection;
