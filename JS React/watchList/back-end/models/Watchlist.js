const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId, Array } = Schema.Types;


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
        type: ObjectId,
        ref: 'user'
    },
    movies: [{
    }]

});

module.exports = new Model("Watchlist", watchlistSchema);