const express = require("express");

const PeopleController = require('./controllers/PeopleController');
const EventRoomController = require('./controllers/EventRoomController');

const routes = express.Router();

routes.post("/people", PeopleController.store);
routes.get("/people/", PeopleController.index);
routes.get("/people/:firstName", PeopleController.show);
routes.delete("/people/:id", PeopleController.destroy);

routes.post("/eventRoom", EventRoomController.store);



module.exports = routes;