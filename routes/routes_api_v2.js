// API version 2
var express = require('express');
var router = express.Router();
var path = require('path');
const recipes = require("../recipes.js")

router.get('/info', function(request, response) {
    response.status(200);
    response.json({
        "description": "This server provides recipes."
    });
});

router.get("/recipes", (req, res) => {
    let category = req.query.category;

    if (category != null) {
        res.status(200);

        let recipe = recipes.filter(function(item) {
            return (item.category == category);
        });
    
        res.json(recipe);
    } else {
        res.status(200);

        res.json(recipes);
    }
});

router.get("/recipes/:number", function(req, res) {
    res.status(200);
    const number = req.params.number
    res.json(recipes[number - 1]);
});

router.get('*', function(req, res) {
    res.status(404);
    res.json({
        "description": "The endpoint you were looking for has not been found."
    });
});

module.exports = router;