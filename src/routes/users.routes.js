const { Router } = require("express");

const UsersController = require("../controllers/UsersControllers.js")
const ensureAuthenticated = require("../middlewares/ensureAutheticathed.js")

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);

module.exports = usersRoutes;