module.exports = (app) => {
    app.get('/formulario_inclusao_noticias', (req, res) => {
        res.render("admin/form_add_noticia", { validacao : {}, noticia : {} });
    });

    app.post('/noticias/salvar', (req, res) => {
        const noticia = req.body;

        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 chars').len(10,100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia', 'Noticia é obrigatório').notEmpty();  

        const erros = req.validationErrors();

        // console.log(noticia);
        // console.log(erros);

        if (erros) {
            res.render("admin/form_add_noticia", { validacao : erros, noticia : noticia });
            return;
        }

        const connection = app.config.dbConnection();
        const NoticiasDAO = new app.app.models.NoticiasDAO(connection);

        NoticiasDAO.salvarNoticia(noticia, (err, result) => {
            res.redirect('/noticias');    
        });
    });
};