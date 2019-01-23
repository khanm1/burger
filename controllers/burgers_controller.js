//ROUTER FILE - using the keywords from ORM (ALL, INSERT, and UPDATE)
var express = require("express");
var router = express.Router();
var burger = require("../models/burger");


// Create all our routes and set up logic within those routes where required.

//***************************************************** */
// LOADS ALL the burgers FROM the DB to DOM
router.get("/", (req, res) => {
    burger.all(data => {
        var hbsObject = {
            burgers: data //burger is the database and data is what is inside the db
        };
        console.log(hbsObject);
        res.render("index", hbsObject); //index is the name of the page and hbsObject is db object
    })
});

//***************************************************** */
// ADDS a burger to the DB
router.post("/api/burgers", (req, res) => {
    burger.insert([
        "burger_name", "devoured"
    ], [req.body.burger_name, req.body.devoured], result => {
        res.json({
            id: result.insertId
        });
    });
});

//***************************************************** */
//UPDATES 1 burger from list to devoured
router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, result => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
