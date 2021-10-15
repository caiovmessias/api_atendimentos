const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'mysql-5.7',
    user: 'root',
    password: '12345678',
    database: 'agenda-petshop'
});

module.exports = conexao;