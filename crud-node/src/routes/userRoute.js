const express = require("express");
//const UserController = require("../controller.js/userController");
const userController = require("../controller.js/userController");


const router = express.Router();

router.post("/", userController.createUser);

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById)

router.patch("/:id" ,userController.updateUser)

router.delete('/:id',userController.deleteUser)

module.exports = router;