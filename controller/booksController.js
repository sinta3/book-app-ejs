const axios = require('axios')
const Book = require('../models/booksModel')

async function showBooksByKeyword(req,res){
    try {
       const data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=%7B${req.body.search}`)
       res.render('component',{books:data.data.items})
    } catch (error) {
        res.status(500).json("error")
    }
}


async function showHome(req,res){
    try {
       res.render('home.ejs')
    } catch (error) {
        console.log(error)
        res.status(500).json("error")
    }
}

async function favoriteBook(req,res){
    try {
        await Book.create({title:req.query.title})
        res.render('home.ejs')
    } catch (error) {
        res.status(500).json("error")
    }
}

module.exports = {
    showBooksByKeyword,
    showHome,
    favoriteBook
}