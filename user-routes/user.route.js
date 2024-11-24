const express = require("express");
const router = express.Router();
const { createUser, getUser,getSingleUser } = require("../user-controller/user.controller.js");

router.route("/").post(createUser).get(getUser);
router.route("/:id").get(getSingleUser);


module.exports = router
