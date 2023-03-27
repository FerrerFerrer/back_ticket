module.exports = (sequelize, Sequelize) => {
    const Ticket = sequelize.define("ticket", {
        id_ticket: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_ticket_muni: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nombre_completo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        paterno: {
            type: Sequelize.STRING,
            allowNull: false
        },  
        materno: {
            type: Sequelize.STRING,
            allowNull: false
        },
        curp: {
            type: Sequelize.STRING,
            allowNull: false
        },
        edad: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        telefono: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        celular: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        correo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        grado: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        municipio: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'municipios',
                key: "id_municipio"
            }
        },
        asunto: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        estatus: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    // Ticket.hasMany(Municipio);
    return Ticket;
};