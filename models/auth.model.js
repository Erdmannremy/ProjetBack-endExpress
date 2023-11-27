const {sqlserver, DataTypes, ModelStatic } = require('sequelize');

/**
 * Fonction pour créer un model Character (donc table de db)
 * Le JSDoc sert à l'autocomplétion
 * @param {sqlserver} sqlserver
 * @returns {ModelStatic<any>}
 */

module.exports = (sqlserver) => {
    // Définition de l'object sequelize (db)
    const Auth = sqlserver.define('Auth', {
        // L'id se crée automatiquement si non spécifié ici
        login: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        hashedPassword: {
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        jwt: {
            type: DataTypes.STRING(500),
            allowNull: true,
        }
    }, {
        // Option de création propre à Sequelize (voir doc)
        createdAt: true,
        tableName: 'Users',
        indexes: [
            {
                // Création de contraintes
                name: 'UK_Auth__jwt',
                fields: ['login', 'jwt'],
                unique: false,
            },
        ]
    })
    return Auth;
}