const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    movieName:{
        type : String,
        required : true
    },
    movieYear : {
        type : String,
        required : true
    },
    movieGenre : {
        type : String,
        required : true
    },
    imdbRating :{
        type : Number,
        required : true
    }
})

module.exports = mongoose.model('movieModel', movieSchema);
