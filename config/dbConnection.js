const mysql = require ('mysql');

const connMySql = function () { 
    console.log('Conexao com o BD estabelecida');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'admin',
        database : 'portal_noticias'
    });
}

module.exports = () => {
    console.log('O autoload carregou o modulo de conexao com o BD')
    return connMySql;
};

        