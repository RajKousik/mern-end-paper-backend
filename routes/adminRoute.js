const express = require("express");
const router = express.Router();  


const {createNewMovie, updateMovie, deleteMovie, getMovie} = require('../controllers/adminController.js')



// router.route('/').get(getAllStudentDetails)
router.route('/').post(createNewMovie)

// router.route('/:id').get(getStudent, getStudentDetail); 
router.route('/:id').patch(getMovie, updateMovie);
router.route('/:id').delete(getMovie, deleteMovie);

module.exports = router;