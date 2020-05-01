// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Result: " + result);
//     });
// });

//connect to mysql and create db
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "mary",
    password: "31547207"
});

con.connect(function (err) {
if (err) throw err;
console.log("connected");
con.query("CREATE DATABASE node_train", function (err, result) {
if (err) throw err;
console.log("database created");
});
});