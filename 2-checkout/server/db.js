const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS shoppers (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, shopper_id VARCHAR(255) NOT NULL UNIQUE, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255), address VARCHAR (255), phone VARCHAR(255), creditcard VARCHAR (255), expiry VARCHAR(255), cvv VARCHAR(255), billingZip VARCHAR(255))"
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
