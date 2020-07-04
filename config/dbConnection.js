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
    return connMySql;
};

        