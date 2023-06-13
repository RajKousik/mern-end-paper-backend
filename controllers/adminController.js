const movieModel = require('../model/movieModel')


const createNewMovie = async (req, res)=>{
    
    const newMovie = new movieModel({
        movieName : req.body.movieName,
        movieYear : req.body.movieYear,
        movieGenre : req.body.movieGenre,
        imdbRating : req.body.imdbRating
    })

    try{
        const movie = await newMovie.save();
        res.status(201).json(movie);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message: err.message});
    }

}

const updateMovie = async (req, res) => {
    if(req.body.movieName != null)
    {
        res.student.movieName = req.body.movieName
    }
    if(req.body.movieYear != null)
    {
        res.student.movieYear = req.body.movieYear
    }
    if(req.body.movieGenre != null)
    {
        res.student.movieGenre = req.body.movieGenre
    }
    if(req.body.imdbRating != null)
    {
        res.student.imdbRating = req.body.imdbRating
    }

    try{
        const updatedMovie = await res.movie.save()
        res.status(200).json(updatedMovie)
    }

    catch(error){
        res.status(400).json({message: error.message})
    }
}

const deleteMovie = async(req, res) => {
    try{
        await res.movie.deleteOne()
        res.status(200).json({message: `Deleted Movie : ${res.movie.movieName}`})
    }

    catch(error){
        res.status(400).json({message: error.message})
    }
}


async function getMovie(req, res, next) {
    let student;
    try
    {
        movie = await movieModel.findById(req.params.id);
        if(student == null)
        {
            return res.status(404).json({Message : `Movie Not Found with id ${req.params.id}`})
        }
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({message : err.message});
    }
    res.student = student;
    next();
} 

module.exports = {createNewMovie, updateMovie, deleteMovie, getMovie}