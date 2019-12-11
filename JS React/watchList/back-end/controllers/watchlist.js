const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const author = req.query.author
        if (author) {
            models.Watchlist.find({ author: author })
                .then((watchlist) => {
                    res.send(watchlist);
                })
                .catch(next);
        } else {
            models.Watchlist.find()
                .then((watchlists) => {
                    res.send(watchlists);
                })
                .catch(next);
        }
    },

    post: (req, res, next) => {
        const { description, title } = req.body;
        const { _id } = req.user;

        models.Watchlist.create({ description, title, author: _id })
            .then((createdWatchlist) => {
                res.send(createdWatchlist);
            })
            .catch(next);

    },

    put: (req, res, next) => {
        const id = req.params.id; // watchlist id req.body=movie data
        const newMovie = req.body;
        const { _id } = req.user;

        models.Watchlist.findByIdAndUpdate({ _id: id }, { '$push': { movies: newMovie } })
            .then((updatedMovies) => res.send(updatedMovies))
            .catch(next)

    }

    // delete: (req, res, next) => {
    //     const id = req.params.id;
    //     models.Movie.deleteOne({ _id: id })
    //         .then((removedMovie) => res.send(removedMovie))
    //         .catch(next)
    // }
};