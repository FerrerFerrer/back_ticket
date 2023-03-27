module.exports = (sequelize, Sequelize) => {
    const Nivel = sequelize.define("nivel", {
        id_nivel: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nivel: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Nivel;
};