const app = require('./config/server');

// Rotas manuais se tornaram obsoletas após implementar Módulo Consign  
// const rotaHome = require('./app/routes/home')(app);
// const rotaNoticias = require('./app/routes/noticias')(app);
// const rotaFormulario = require('./app/routes/formulario_inclusao_noticias')(app);

app.listen(3000, () => {
    console.log('Server ON!! Listening on port 3000...');
});
