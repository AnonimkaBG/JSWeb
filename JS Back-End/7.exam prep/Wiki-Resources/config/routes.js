const routers = require('../routers');

module.exports = (app) => {
    app.use('/home', routers.home);

    app.use('/user', routers.user);

    app.use('/article', routers.article);

    app.use('/',routers.home);

    app.use('*', (req, res, next) => {
        res.send('<h1>NOOOOOOO</h1>')
    })
};