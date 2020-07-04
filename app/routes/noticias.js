// const dbConnection = require('../../config/dbConnection');

module.exports = (app) => {

    app.get('/noticias', (req, res) => {
        
        const connection = app.config.dbConnection();
        const NoticiasDAO = new app.app.models.NoticiasDAO(connection);

        NoticiasDAO.getNoticias( (err, result) => {
            res.render("noticias/noticias", {noticias : result});    
        })
        
    });
};