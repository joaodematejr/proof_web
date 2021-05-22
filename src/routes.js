const express = require("express");

const PeopleController = require('./controllers/PeopleController');

const routes = express.Router();

routes.post("/people", PeopleController.store);
routes.get("/people", PeopleController.show);
routes.delete("/people/:id", PeopleController.destroy);

module.exports = routes;