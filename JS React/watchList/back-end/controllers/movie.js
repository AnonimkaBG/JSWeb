const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const authorId=req.query.author;
        if (authorId) {
            models.Movie.find({ author: authorId })
                .then((movies) => {
                    if(movies.length!==0){
                        res.send(movies);
                    }
                })
                .catch(next);
        } else {
            models.Movie.find()
                .then((movies) => {
                    res.send(movies);
                })
                .catch(next);
        }
    },

    getOne:(req, res, next) => {
        const id = req.params.id;
        models.Movie.findById(id)
            .then((movie) => {
                res.send(movie);
            })
            .catch(next);
    },

    post: (req, res, next) => {
        const { description,image,title } = req.body;
        const { _id } = req.user;
        models.Movie.findOne({title}).then((movie)=>{
            if(movie){
                const error="This movie already exist!";
                res.status(401).send(JSON.stringify(error));
            }else{
                models.Movie.create({ description, image, title , author: _id})
                .then((createdMovie) => {
                    res.send(createdMovie);
                })
                .catch(next);
            }
        })

       
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Movie.updateOne({ _id: id }, { description })
            .then((updatedMovie) => res.send(updatedMovie))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Movie.deleteOne({ _id: id })
            .then((removedMovie) => res.send(removedMovie))
            .catch(next)
    }
};