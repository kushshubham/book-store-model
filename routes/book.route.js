const express = require("express");
const router = express.Router();
const { createBook, getBooks } = require("../book-controller/book.controller.js");

router.post("/", createBook)
router.get("/", getBooks)


module.exports = router
