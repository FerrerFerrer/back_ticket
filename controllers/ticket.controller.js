const db = require("../models");
const Ticket = db.ticket;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Create a admin
    const ticket = {
        id_ticket_muni: req.id_ticket_muni,
        nombre_completo: req.nombre_completo,
        nombre: req.nombre,
        paterno: req.paterno,
        materno: req.materno,
        curp: req.curp,
        edad: req.edad,
        telefono: req.telefono,
        celular: req.celular,
        correo: req.correo,
        grado: req.grado,
        municipio: req.municipio,
        asunto: req.asunto,
        estatus: "PENDIENTE"
    };

    // Save admin in the database
    Ticket.create(ticket)
        .then(data => {
            res.send({
                message: data || "Ticket creado exitosamente."
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error en la creacion de ticket."
            });
        });
};


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Ticket.findAll({ order: [['id_ticket_muni', 'DESC'], ['municipio', 'ASC']]})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Hay un errror en los ticket."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id_ticket_muni;
    const curp = req.params.curp;
    Ticket.findAll({
        where: { id_ticket_muni: id, curp: curp }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Hay un errror en los ticket."
            });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id_ticket;


    Ticket.update(req.body, {
        where: { id_ticket: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ticket actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar ticket id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error editanto ticket id=" + id
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id_ticket;

    Ticket.destroy({
        where: { id_ticket: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ticket borrado con exito!"
                });
            } else {
                res.send({
                    message: `No puedes borrar el ticket id=${id}.Tal vez el ticket no existe!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "NO se puede borrar el ticket id=" + id
            });
        });
};