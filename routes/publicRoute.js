const Express = require("express");
const publicRoute = Express.Router()
const userController = require("../controller/userController");

// publicRoute.get("api/user/", UserController.getUsers())
publicRoute.get("/api/user", userController.getUsers);
publicRoute.post("/api/loginuser", userController.loginUser)
publicRoute.post("/api/register", userController.signupNewUser)
publicRoute.patch("/api/updateuser", userController.updateExistingUser)
module.exports = publicRoute