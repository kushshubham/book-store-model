const express = require("express");
const router = express.Router();
const { createUser, getUser } = require("../user-controller/user.controller.js");

router.post("/", createUser)
router.get("/", getUser)


module.exports = router
