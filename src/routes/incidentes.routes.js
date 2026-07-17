const express = require("express");
const router = express.Router();


const {

    obtenerIncidentes,

    crearIncidente,

    obtenerIncidentesPorReportante,

    obtenerIncidentesPorEstado,

    obtenerIncidentesPorTipo

} = require("../controllers/incidentes.controller");

router.get("/", obtenerIncidentes);

router.post("/", crearIncidente);

router.get("/reportante/:id", obtenerIncidentesPorReportante);

router.get("/estado/:estado", obtenerIncidentesPorEstado);

router.get("/tipo/:tipo", obtenerIncidentesPorTipo);

module.exports = router;