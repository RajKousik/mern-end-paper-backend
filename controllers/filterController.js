const movieModel = require('../model/movieModel')

const getFilteredMovies = async(req, res) =>
{
    try{ 
        if(req.body.filter == null)
        {
            const movies = await movieModel.find().sort({imdbRating : -1});
            res.status(200).json(movies);
        }
        else
        {
            res.status(200).json({message : req.body.filter});
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message : err.message});
    }
}



module.exports = {getFilteredMovies};