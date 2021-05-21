const express = require("express");

const PeopleController = require('./controllers/PeopleController');

const routes = express.Router();

routes.post("/people", PeopleController.store);

module.exports = routes;