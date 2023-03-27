module.exports = app => {
    const admin = require("../controllers/admin.controller.js");
    const asunto = require("../controllers/asunto.controller.js");
    const municipio = require("../controllers/municipio.controller.js");
    const nivel = require("../controllers/nivel.controller.js");
    const ticket = require("../controllers/ticket.controller.js");

    var router = require("express").Router();

    //   rutas admins
    router.get("admin/", admin.findAll);  // Mostrar todos los admins
    router.get("admin/:id_admin", admin.findOne); //mostrar admin por su id
    router.post("admin/", admin.create);// Crear nuevo admin
    router.put("admin/:id_admin", admin.update);// Actualizar admin por su id
    router.delete("admin/:id_admin", admin.delete);// Borrar admin con id

    //   rutas asunto
    router.get("asunto/", asunto.findAll);  // Mostrar todos los asuntos
    router.get("asunto/:id_asunto", asunto.findOne); //mostrar asunto por su id
    router.post("asunto/", asunto.create);// Crear nuevo asunto
    router.put("asunto/:id_asunto", asunto.update);// Actualizar asunto por su id
    router.delete("asunto/:id_asunto", asunto.delete);// Borrar asunto con id

    //   rutas municipio
    router.get("municipio/", municipio.findAll);  // Mostrar todos los municipios
    router.get("municipio/:id_municipio", municipio.findOne); //mostrar municipio por su id
    router.post("municipio/", municipio.create);// Crear nuevo municipio
    router.put("municipio/:id_municipio", municipio.update);// Actualizar municipio por su id
    router.delete("municipio/:id_municipio", municipio.delete);// Borrar municipio con id


    //   rutas nivel
    router.get("nivel/", nivel.findAll);  // Mostrar todos los nivels
    router.get("nivel/:id_nivel", nivel.findOne); //mostrar nivel por su id
    router.post("nivel/", nivel.create);// Crear nuevo nivel
    router.put("nivel/:id_nivel", nivel.update);// Actualizar nivel por su id
    router.delete("nivel/:id_nivel", nivel.delete);// Borrar nivel con id

    //   rutas tickets
    router.get("ticket/", ticket.findAll);  // Mostrar todos los tickets
    router.get("ticket/:id_ticket", ticket.findOne); //mostrar ticket por su id
    router.post("ticket/", ticket.create);// Crear nuevo ticket
    router.put("ticket/:id_ticket", ticket.update);// Actualizar ticket por su id
    router.delete("ticket/:id_ticket", ticket.delete);// Borrar ticket con id
};