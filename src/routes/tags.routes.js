const { Router } = require("express");

const MovieTagsController = require("../controllers/MovieTagsController.js")
const ensureAuthenticated = require("../middlewares/ensureAutheticathed");

const movieTagsRoutes = Router();

const movieTagsController = new MovieTagsController();

movieTagsRoutes.get("/", ensureAuthenticated, movieTagsController.index);

module.exports = movieTagsRoutes;