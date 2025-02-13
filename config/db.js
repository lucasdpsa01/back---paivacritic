const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,  // Pega da env ou usa o padrão 5432
    logging: false  // Desativa logs do Sequelize no console
});

// Teste de conexão
sequelize.authenticate()
    .then(() => console.log("🔗 Conexão com o banco de dados estabelecida"))
    .catch(err => console.error("❌ Erro ao conectar no banco:", err));

module.exports = sequelize;
