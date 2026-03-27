const mysql = require('mysql2');

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

const dbConnection = mysql.createConnection(dbConfig);

dbConnection.connect(err => {
    if (err) {
        console.error('Errore di connessione al database:', err);
    } else {
        console.log('Connesso al database MySQL');
    }
});

module.exports = dbConnection;


