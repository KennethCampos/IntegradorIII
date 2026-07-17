const express = require("express");

const app = express();

app.use(express.json());

const usuariosRoutes = require("./routes/usuarios.routes");
const incidentesRoutes = require("./routes/incidentes.routes");

app.use("/api/usuarios", usuariosRoutes);
app.use("/api/incidentes", incidentesRoutes);

module.exports = app;