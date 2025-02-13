const { DataTypes } = require('sequelize');
const database = require('../config/db');

const Sugestao = database.define('Sugestao', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    recomendacao: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true, 
    tableName: 'sugestoes' 
});

module.exports = Sugestao;
