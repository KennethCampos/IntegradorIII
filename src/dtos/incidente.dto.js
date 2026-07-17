const crearIncidenteDTO = (body) => {

    if (!body.titulo || body.titulo.trim() === "") {
        throw new Error("El título es obligatorio.");
    }

    if (!body.descripcion || body.descripcion.trim() === "") {
        throw new Error("La descripción es obligatoria.");
    }

    if (!body.reportanteId || body.reportanteId.trim() === "") {
        throw new Error("El reportante es obligatorio.");
    }

    return {

        titulo: body.titulo.trim(),

        descripcion: body.descripcion.trim(),

        tipo: body.tipo,

        ubicacion: body.ubicacion,

        fechaIncidente: body.fechaIncidente,

        reportanteId: body.reportanteId,

        // Valor por defecto
        estado: "Pendiente",

        evidencias: body.evidencias || [],

        fechaRegistro: new Date().toISOString()

    };

};

module.exports = {
    crearIncidenteDTO
};