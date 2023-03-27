const express = require("express");
const cors = require("cors");
const rutasAdmin = require("./routes/general.routes.js");
const app = express();


// some legacy browsers (IE11, various SmartTVs) choke on 204
// var corsOptions = {
//     origin: "http://localhost:8081"
// };
// app.use(cors(corsOptions));
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const db = require("./models");

// db.ticket.sync({ force: true })
db.sequelize.sync()
    .then(() => {
        console.log("Base de datos sincronizada.");
    })
    .catch((err) => {
        console.log("Falla para sincronizar base de datos: " + err.message);
    });

app.get("/", (req, res) => {
    res.json({ message: "API lista!." });
});

require("./routes/general.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor listo en el puerto ${PORT}.`);
});