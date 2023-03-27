const db = require("../models");
const Asunto = db.asunto;
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
    const asunto = {
        descripcion: req.body.descripcion
    };

    // Save admin in the database
    Asunto.create(asunto)
        .then(data => {
            res.send({
                message: data || "Asunto ingresado exitosamente."
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error en la creacion de asunto."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Asunto.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Hay un errror en los asuntos."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id_asunto;
    Asunto.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pude buscar asunto id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error buscando el asunto con id=" + id
            });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id_asunto;

    Asunto.update(req.body, {
        where: { id_asunto: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Asunto actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar asunto id=${id}. Maybe asunto was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error editanto asunto id=" + id
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id_asunto;

    Asunto.destroy({
        where: { id_asunto: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Asuntos borrado con exito!"
                });
            } else {
                res.send({
                    message: `No puedes borrar el asunto id=${id}.Tal vez el asunto no existe!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "NO se puede borrar el asunto id=" + id
            });
        });
};