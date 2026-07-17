const incidenteService = require("../services/incidentes.service");

const { crearIncidenteDTO } = require("../dtos/incidente.dto");


// Obtener todos los incidentes
const obtenerIncidentes = async (req, res) => {

    try {

        const incidentes = await incidenteService.obtenerIncidentes();

        res.status(200).json(incidentes);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

// Registrar un incidente
const crearIncidente = async (req, res) => {

    try {

        const incidenteDTO = crearIncidenteDTO(req.body);

        const incidenteCreado = await incidenteService.crearIncidente(incidenteDTO);

        res.status(201).json({
            mensaje: "Incidente registrado correctamente.",
            incidente: incidenteCreado
        });

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};


//busqueda de incidentes del repotante
const obtenerIncidentesPorReportante = async (req, res) => {

    try {

        const incidentes = await incidenteService.obtenerIncidentesPorReportante(
            req.params.id
        );

        res.status(200).json(incidentes);

    } catch (error) {

        res.status(500).json({

            mensaje: error.message

        });

    }

};

//busqueda por tipo
const obtenerIncidentesPorEstado = async (req, res) => {

    try {

        const incidentes = await incidenteService.obtenerIncidentesPorEstado(
            req.params.estado
        );

        res.status(200).json(incidentes);

    } catch (error) {

        res.status(500).json({

            mensaje: error.message

        });

    }

};

//busqueda por tipo accidente o incidentes
const obtenerIncidentesPorTipo = async (req, res) => {

    try {

        const incidentes = await incidenteService.obtenerIncidentesPorTipo(
            req.params.tipo
        );

        res.status(200).json(incidentes);

    } catch (error) {

        res.status(500).json({

            mensaje: error.message

        });

    }

};

module.exports = {

    obtenerIncidentes,

    crearIncidente,

    obtenerIncidentesPorReportante,

    obtenerIncidentesPorEstado,

    obtenerIncidentesPorTipo

};