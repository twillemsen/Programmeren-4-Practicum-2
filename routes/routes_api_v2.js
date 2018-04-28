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

router.get("/recipes", function(req, res) {
    res.status(200);
    res.json(recipes).end();
});

router.get('*', function(req, res) {
    res.status(404);
    res.json({
        "description": "The endpoint you were looking for has not been found."
    });
});

module.exports = router;