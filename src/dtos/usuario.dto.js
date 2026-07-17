const crearUsuarioDTO = (body) => {

    if (!body.nombre || body.nombre.trim() === "") {
        throw new Error("El nombre es obligatorio.");
    }

    if (!body.correo || body.correo.trim() === "") {
        throw new Error("El correo es obligatorio.");
    }

    if (!body.password || body.password.trim() === "") {
        throw new Error("La contraseña es obligatoria.");
    }

    if (!body.rol || body.rol.trim() === "") {
        throw new Error("El rol es obligatorio.");
    }

    const rolesPermitidos = [
        "Administrador",
        "Reportante",
        "Responsable"
    ];

    if (!rolesPermitidos.includes(body.rol)) {
        throw new Error("El rol no es válido.");
    }

    return {

        nombre: body.nombre.trim(),

        correo: body.correo.trim().toLowerCase(),

        password: body.password,

        rol: body.rol,

        activo: true,

        fechaRegistro: new Date().toISOString()

    };

};

module.exports = {
    crearUsuarioDTO
};