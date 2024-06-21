const { Router } = require("express");

const tagsController = require("../controllers/TagsController.js")
const ensureAuthenticated = require("../middlewares/ensureAutheticathed");

const TagsRoutes = Router();

const TagsController = new tagsController();

TagsRoutes.get("/", ensureAuthenticated, TagsController.index);

module.exports = TagsRoutes;