const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId , Array} = Schema.Types;

const movieSchema = new Schema({

    description: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        ref: "User"
    }

});

const watchlistSchema = new Schema({

    description: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        ref: 'Username'
    },
    movies: [ movieSchema]

});

module.exports = new Model("Watchlist", watchlistSchema,"watchlist");