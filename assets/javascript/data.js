const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "your_host",
  user: "your_user",
  password: "your_password",
  database: "your_database",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected   to database!");

  const sql = "SELECT * FROM users";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
  });

  connection.end();
});
// -------------------------------------------------------Phan Trang--------------------------------
// -------------------------------------------------------Phan Trang--------------------------------
