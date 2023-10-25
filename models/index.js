// Importation l'object Sequelize
const { Sequelize } = require('sequelize');

// Initilisation une nouvelle instance de l'object avec SQLite en paramètre
const sequelize = new Sequelize({
    dialect: 'mssql',
    database: 'sequelizeDemo',
    username: 'sa',
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 1433 // Le port de base de SQL Server
});

// Création de l'object db
const db = {};
module.exports = db;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Ajout des models
db.Character = require('./character.model')(sequelize);
db.Auth = require('./auth.model')(sequelize);

