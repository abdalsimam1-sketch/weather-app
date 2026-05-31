const Router = require("express");
const { getWeather } = require("../controllers/weatherControllers");
const weatherRouter = Router();

weatherRouter.get("/", getWeather);

module.exports = weatherRouter;
