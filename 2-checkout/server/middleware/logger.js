const db = require('../db.js')


module.exports = (req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} | s_id: ${req.session_id} | ${req.method} ${
      req.url
    }`)

    console.log('test inside logger')
    db.query(`INSERT IGNORE INTO shoppers (shopper_id) VALUES ('${req.session_id}')`, (err, data) => {
        console.log('inside the query function')
    });

  next();
};
