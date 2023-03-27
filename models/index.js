const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        // maximum time, in milliseconds, that pool will try to get connection before throwing error
        acquire: dbConfig.pool.acquire,
        // maximum time, in milliseconds, that a connection can be idle before being released
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admin = require("./admin.model.js")(sequelize, Sequelize);
db.asunto = require("./asunto.model.js")(sequelize, Sequelize);
db.municipio= require("./municipio.model.js")(sequelize, Sequelize);
db.nivel = require("./nivel.model.js")(sequelize, Sequelize);
db.ticket = require("./ticket.model.js")(sequelize, Sequelize);

module.exports = db;