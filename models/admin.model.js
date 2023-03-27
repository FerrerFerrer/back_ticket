module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("admin", {
    id_admin: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    correo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    apellido: {
      type: Sequelize.STRING,
      allowNull: false
    },
    contrasenia: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Admin;
};