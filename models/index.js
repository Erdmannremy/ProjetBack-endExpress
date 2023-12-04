// Importation l'object sequelize
const Sequelize = require('sequelize');

// Initilisation une nouvelle instance de l'object avec sequelize en paramètre
const sequelize = new Sequelize({
    dialect: 'mssql',
    database: 'db',
    username: 'sa',
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 1433 // Le port de base de SQL Server
});

// Création de l'object db
const db = {};
module.exports = db;

db.sequelize = sequelize;


// Ajout des models
db.Auth = require('./auth.model')(sequelize);

