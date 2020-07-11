module.exports.noticias = function (app, req, res) {
    const connection = app.config.dbConnection();
        const NoticiasDAO = new app.app.models.NoticiasDAO(connection);

        NoticiasDAO.getNoticias( (err, result) => {
            res.render("noticias/noticias", {noticias : result});    
        });
        
};


module.exports.noticia = function(app, req, res) {
    const connection = app.config.dbConnection();
        const NoticiasDAO = new app.app.models.NoticiasDAO(connection);

        NoticiasDAO.getNoticia((err, result) => {
            res.render("noticias/noticia", {noticia : result});   
            // res.redirect('/noticias');
        });
};