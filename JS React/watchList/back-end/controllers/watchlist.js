const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Watchlist.find()
            .then((watchlists) => {
                res.send(watchlists);
            })
            .catch(next);
    },

    post: (req, res, next) => {
        const { description,title } = req.body;
        const { username} = req.user;

        models.Watchlist.create({ description, title , author: username })
            .then((createdMovie) => {
                res.send(createdMovie);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params._id;
        console.log(req.body)
        console.log(req.params)
        let movies=[];
        models.Watchlist.findById(id).then((oldList)=>{
            console.log(oldList)
            movies=oldList;
        });
        const { newMovie } = req.body;
        console.log(newMovie)
        movies.push(newMovie);
        console.log(movies);
        models.Movie.updateOne({ _id: id }, { movies })
            .then((updatedMovie) => res.send(updatedMovie))
            .catch(next)
    }

    // delete: (req, res, next) => {
    //     const id = req.params.id;
    //     models.Movie.deleteOne({ _id: id })
    //         .then((removedMovie) => res.send(removedMovie))
    //         .catch(next)
    // }
};