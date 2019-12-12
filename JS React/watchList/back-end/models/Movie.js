const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

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
        required: true,
        unique: true
    },
    author: {
        type: ObjectId,
        ref: "user"
    },

});

module.exports = new Model("Movie", movieSchema);