const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'CAFEARQUI'
});

mysqlConnection.connect( function (err) {
    if(err) {
        console.log(err);
        return;
    }else {
        console.log('database conectada');
    }
});

module.exports = mysqlConnection;