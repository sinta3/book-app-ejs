const booksController = require('../controller/booksController')
const methodOverride = require("method-override");
const router = require("express").Router();

router.get('/',booksController.showHome)
router.post('/search',booksController.showBooksByKeyword)
router.post('/favorite',booksController.favoriteBook)

module.exports = router