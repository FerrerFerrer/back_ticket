const db = require("../models");
const Nivel = db.nivel;
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
    const nivel = {
        nivel: req.body.nivel
    };

    // Save admin in the database
    Nivel.create(nivel)
        .then(data => {
            res.send({
                message: data || "Nivel ingresado exitosamente."
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error en la creacion de nivel."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Nivel.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Hay un error en los niveles."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id_nivel;

    Nivel.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pude buscar nivel id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error buscando el nivel con id=" + id
            });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id_nivel;

    Nivel.update(req.body, {
        where: { id_nivel: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Nivel actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar nivel id=${id}. Maybe nivel was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error editanto nivel id=" + id
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id_nivel;

    Nivel.destroy({
        where: { id_nivel: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Nivel borrado con exito!"
                });
            } else {
                res.send({
                    message: `No puedes borrar el nivel id=${id}.Tal vez el nivel no existe!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "NO se puede borrar el nivel id=" + id
            });
        });
};