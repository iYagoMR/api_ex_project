const { Router } = require("express");

const notesController = require("../controllers/NotesController.js");
const ensureAuthenticated = require("../middlewares/ensureAutheticathed");

const NotesRoutes = Router();

const NotesController = new notesController();

NotesRoutes.use(ensureAuthenticated);

NotesRoutes.get("/", NotesController.index);
NotesRoutes.post("/", NotesController.create);
NotesRoutes.get("/:id", NotesController.show);
NotesRoutes.delete("/:id", NotesController.delete);

module.exports = NotesRoutes;
