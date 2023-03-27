module.exports = (sequelize, Sequelize) => {
    const Municipio = sequelize.define("municipio", {
        id_municipio: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        municipio: {
            type: Sequelize.STRING,
            allowNull: false
        },
        estado: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    // Municipio.belongsTo(ticketModel);
    return Municipio;
};