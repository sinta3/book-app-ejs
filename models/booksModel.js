const { mongoose } = require("mongoose")

const bookSchema = new mongoose.Schema({
    title:{type:String}
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
