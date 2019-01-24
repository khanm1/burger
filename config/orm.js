// Import MySQL connection.
const connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
const printQuestionMarks = num => {
  let arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
  let arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    let value = ob[key];

    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

//Object-relational mapping
//The query templates to with custom names
const orm = {

  //***************************************************** */
  selectAll: (tableInput, callback) => {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  //***************************************************** */
  insertOne: (table, cols, vals, callback) => {
    const queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      callback(result);
    });

  },

  //***************************************************** */
  updateOne: (table, objColVals, condition, callback) => {
    const queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, (err, results) => {
      if (err) throw err;

      callback(results);

    });
  }

}

module.exports = orm;

