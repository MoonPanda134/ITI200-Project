const express = require("express");
const bodyParser = require("body-parser");
const Pool = require('pg').Pool
const app = express();

app.use(express.static('Game_Project'))
app.use(bodyParser.json());


app.post("/api/contact/save", (req, res) => {

    const contact = req.body;

    const sql = "INSERT INTO contactInformation (email, message) VALUES ($1, $2)";

    const data = [contact.email, contact.message];

   pool.query(sql, data, (error, results) => {

       if (error) throw error

       res.status(200).json(results.rows)
   });

    res.status(200).send("ok");
});





app.listen(80, () => {
    console.log("Listening on port 80");
});
