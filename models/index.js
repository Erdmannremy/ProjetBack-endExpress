// Importation l'object Sequelize
const { sqlserver } = require('sqlserver');

// Initilisation une nouvelle instance de l'object avec SQLite en paramètre
const sql = new Sqlserver({
    dialect: 'mssql',
    database: 'sqlserver',
    username: 'db',
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 1433 // Le port de base de SQL Server
});

// Création de l'object db
const db = {};
module.exports = db;

db.Sqlserver = Sqlserver;
db.Sqlserver = Sqlserver;

// Ajout des models
db.Character = require('./character.model')(sqlserver);
db.Auth = require('./auth.model')(sqlserver);

