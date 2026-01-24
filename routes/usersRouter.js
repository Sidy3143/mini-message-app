const { Router } = require("express");
const usersRouter = Router();
const usersController = require("../controllers/usersController");

usersRouter.get("/", usersController.getMessages);

usersRouter.get("/new", usersController.createMessageGet);
usersRouter.post("/new", usersController.createMessagePost);

usersRouter.get("/search", usersController.searchMessage);
usersRouter.post("/delete", usersController.deleteUserMessage);

module.exports = usersRouter;