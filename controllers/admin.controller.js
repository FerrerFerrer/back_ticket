const db = require("../models");
const Admin = db.admin;
// const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    // if (!req.body.title) {
    //     res.status(400).send({
    //         message: "Content can not be empty!"
    //     });
    //     return;
    // }
    // Create a admin
    const admin = {
        correo: req.body.correo,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        contrasenia: req.body.contrasenia,
    };

    // Save admin in the database
    Admin.create(admin)
        .then(data => {
            res.send({ 
                message:data || "Admin ingresado exitosamente."});
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error en la creacion de admin."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Admin.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Hay un errror en los admin."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id_admin;

    Admin.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pude buscar admin id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error buscando el admin con id=" + id
            });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id_admin;

    Admin.update(req.body, {
        where: { id_admin: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Admin actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar admin id=${id}. Maybe admin was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error editanto admin id=" + id
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id_admin;

    Admin.destroy({
        where: { id_admin: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Admin borrado con exito!"
                });
            } else {
                res.send({
                    message: `No puedes borrar al admin id=${id}.Tal vez el admin no existe!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "NO se puede borrar al admin id=" + id
            });
        });
};