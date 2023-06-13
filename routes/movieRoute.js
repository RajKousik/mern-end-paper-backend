const express = require("express");
const router = express.Router();  


const {getAllMovies} = require('../controllers/movieController.js')



router.route('/').get(getAllMovies)
router.route('/').post(getAllMovies)

module.exports = router;