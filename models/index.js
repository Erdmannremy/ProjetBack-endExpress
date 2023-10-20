// Importation l'object Sequelize
const { Sequelize } = require('sequelize');

// Initilisation une nouvelle instance de l'object avec SQLite en paramètre
const sequelize = new Sequelize('sqlite::memory:');

// Création de l'object db
const db = {};
module.exports = db;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Ajout des models
db.Character = require('./character.model')(sequelize);

