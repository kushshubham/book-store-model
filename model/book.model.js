const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    bookAuthor: {
        type: String,
        required: true
    },
    bookDescription: {
        type: String,
        required: true
    },
    bookPrice: {
        type: Number,
        required: true
    },
    bookImage: {
        type: String,
        required: false
    },
    bookCategory: {
        type: String,
        required: true
    }
})

const bookModel = mongoose.model("Book", bookSchema);
module.exports = bookModel