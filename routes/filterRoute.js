const express = require("express");
const router = express.Router();  


const {getFilteredMovies} = require('../controllers/filterController.js')



router.route('/').get(getFilteredMovies)

module.exports = router;