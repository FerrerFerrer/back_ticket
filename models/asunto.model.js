module.exports = (sequelize, Sequelize) => {
    const Asunto = sequelize.define("asunto", {
        id_asunto: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        descripcion: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Asunto;
};