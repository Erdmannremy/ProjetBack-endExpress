// Importation et configuration de dotenv
require('dotenv').config();

// Importation d'express et de la gestion d'async-errors
const express = require('express');
require('express-async-errors');

// Importation du reste
const router = require('./routers/router');


// Utilisation .env
const { PORT, NODE_ENV } = process.env;

// Initialisation de la db
const db = require('./models');

// Check la connection avec la db
db.sequelize.authenticate()
    .then(() => console.log('Connection à la DB réussie'))
    .catch((error) => console.log(`Connection à la DB ratée : ${error}`));

// Migration de la db
if (NODE_ENV === 'development') {
    db.sequelize.sync({ alter: { drop: false}});
};

// Creation du serveur webAPI
const app = express();
app.use(express.json());

// Ajout du routing --> respect du RESTfull on ajoute '/api' comme route de base
app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Web server running on port ${PORT}`);
});

