var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "mary",
    password: "31547207"
});

con.connect(function (err) {
if (err) throw err;
console.log("connected!")
});