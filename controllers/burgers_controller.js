const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.all((data) => {
        console.log(data);
        const burgerObject = {
            burger: data
        };
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create([req.body.burger_name, req.body.devoured], (results) => {
        res.json({ id: results.insertId })
    });
});

router.put("/api/burgers/:id", (req, res) => {


    burger.update([req.body.devoured, req.params.id], (results) => {
        console.log(results)
        res.status(202).end();
    })
})

module.exports = router