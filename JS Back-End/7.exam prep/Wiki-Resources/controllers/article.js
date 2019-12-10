const models = require('../models');
const config = require('../config/config');
const { validationResult } = require('express-validator');

module.exports = {
    get: {
        create: (req, res, next) => {

            const hbsObject = {
                pageTitle: 'Home Page',
                isLoggedIn: req.cookies[config.cookie] !== undefined,
                username: req.user.username
            };
            res.render('create.hbs', hbsObject);
        },

        details: (req, res, next) => {

            const { articleId } = req.params;

            models.Article.findById(articleId).then((article) => {

                const hbsObject = {
                    article,
                    pageTitle: 'article Details',
                    isCreator: req.user.id.toString() === article.creator.toString(),
                    isLoggedIn: req.cookies[config.cookie] !== undefined
                }
                res.render('article-details.hbs', hbsObject);
            }).catch(console.log);
        },

        edit: (req, res, next) => {
            const { articleId } = req.params;

            models.Article.findById(articleId).then((article) => {
                const hbsObject = {
                    article,
                    isLoggedIn: req.cookies[config.cookie] !== undefined
                };

                res.render('edit.hbs', hbsObject);
            })
        },

        delete: (req, res, next) => {
            const { articleId } = req.params;

            models.Article.findByIdAndRemove(articleId).then((removedarticle) => {
                res.redirect('/home/');
            });
        },

        all: (req,res,next)=>{
            models.Article.find().then((articles) => {
                
                const hbsObject = {
                    pageTitle: 'All Articles',
                    isLoggedIn: req.cookies[config.cookie] !== undefined,
                    articles
                };
    
                res.send(articles);
            });
        }
    },

    post: {
        create: (req, res, next) => {

            const { title, description } = req.body;

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.render('create.hbs', {
                    message: errors.array()[0].msg,
                    oldInput: req.body
                })
            }

            models.Article.create({ title, description, creator: req.user.id }).then((createdarticle) => {
                res.redirect('/home/');
            })
        },

        edit: (req, res, next) => {

            const { articleId } = req.params;
            const { title, description } = req.body;

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.render('create.hbs', {
                    message: errors.array()[0].msg,
                    oldInput: req.body
                })
            }

            models.Article.findByIdAndUpdate(articleId, { title, description }).then((updatedarticle) => {
                res.redirect(`/article/details/:${articleId}`);
            });
        }
    }
};