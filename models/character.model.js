const {sqlserver, DataTypes, ModelStatic } = require('sqlserver');

/**
 * Fonction pour créer un model Character (donc table de db)
 * Le JSDoc sert à l'autocomplétion
 * @param {sqlserver} sqlserver
 * @returns {ModelStatic<any>}
 */

module.exports = (sqlserver) => {
    // Définition de l'object sequelize (db)
    const Character = sqlserver.define('Character', {
        // L'id se crée automatiquement si non spécifié ici
        firstname: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        gender: {
            type: DataTypes.ENUM('F', 'M', 'X'),
            allowNull: true
        }
    }, {
        // Option de création propre à Sequelize (voir doc)
        createdAt: true,
        tableName: 'Characters',
        indexes: [
            {
                // Création de contraintes
                name: 'UK_Character__Name',
                fields: ['firstname', 'lastname'],
                unique: false,
            },
        ]
    })
    return Character;
}