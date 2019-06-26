// Set up MySQL connection.
require("dotenv").config();
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "ol5tz0yvwp930510.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "n8e0y0obgnw0xqmm",
  password: process.env.password,
  database: "jysmo18zg6vvqvjc"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
