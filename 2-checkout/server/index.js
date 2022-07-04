require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");


// Establishes connection to the database on server start
const db = require("./db");

const app = express();


// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
/****
 *
 *
 * Other routes here....
 *
 *
 */
app.get('/checkout', (req, res) => {
  console.log('app get request:', req);
})

app.post('/checkout', (req, res) => {
  var session_id = req.session_id;

  if (req.body.form === 'form1'){

    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;


    db.query(`UPDATE shoppers SET name = '${name}', email = '${email}', password = '${password}' WHERE shoppers.shopper_id = '${session_id}'`, (err, data) =>{
      if (err) {
        console.log('err during insert of form1 db.query:', err);
      }
    })
  }

  if (req.body.form === 'form2') {

    var address = req.body.address;
    var phone = req.body.phone;

    db.query(`UPDATE shoppers SET address = '${address}', phone = '${phone}' WHERE shoppers.shopper_id = '${session_id}'`, (err, data) =>{
      if (err) {
        console.log('err during insert of form1 db.query:', err);
      }
    });
  }

  if (req.body.form === 'form3') {
    var creditcard = req.body.creditcard;
    var expiry = req.body.expiry;
    var cvv = req.body.cvv;
    var billingZip = req.body.billingZip;

    db.query(`UPDATE shoppers SET creditcard = '${creditcard}', expiry = '${expiry}', cvv = '${cvv}', billingZip = '${billingZip}' WHERE shoppers.shopper_id = '${session_id}'`, (err, data) =>{
      if (err) {
        console.log('err during insert of form3 db.query:', err);
      }
    });
  }






});


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
