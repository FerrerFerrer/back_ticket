const db = require("../models");
const Municipio = db.municipio;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    // if (!req.body.nombre) {
    //     res.status(400).send({
    //         message: "Content can not be empty!"
    //     });
    //     return;
    // }
    // Create a admin
    const municipio = {
        municipio: req.body.municipio,
        estado: req.body.estado
    };

    // Save admin in the database
    Municipio.create(municipio)
        .then(data => {
            res.send({
                message: data || "Municipio creado exitosamente."
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error en la creacion de municipio."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Municipio.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Hay un errror en los municipios."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id_municipio;
    Municipio.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pude buscar ticket id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error buscando el ticket con id=" + id
            });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id_municipio;

    Municipio.update(req.body, {
        where: { id_municipio: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Municipio actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar municipio id=${id}. Maybe municipio was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error editanto municipio id=" + id
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id_municipio;

    Municipio.destroy({
        where: { id_municipio: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Municipio borrado con exito!"
                });
            } else {
                res.send({
                    message: `No puedes borrar el municipio id=${id}. Tal vez el municipio no existe!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "NO se puede borrar el municipio id=" + id
            });
        });
};
