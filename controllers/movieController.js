const movieModel = require('../model/movieModel')

const getAllMovies = async(req, res) =>
{
    try{ 
        let movies
        if(req.body.filter == null || req.body.filter === "All")
        {
            movies = await movieModel.find().sort({imdbRating : -1});
            return res.status(200).json(movies);
        }
        else
        {
            movies = await movieModel.find({movieGenre : req.body.filter}).sort({imdbRating : -1});
            return res.status(200).json(movies);
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message : err.message});
    }
}



module.exports = {getAllMovies};