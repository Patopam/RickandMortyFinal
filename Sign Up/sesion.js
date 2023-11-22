const PERSONAS = "personas";
const USUARIO = "usuario";

export const estaEnSesion = () => {
    const usuario = localStorage.getItem(USUARIO);

    if (usuario === null) {
        window.location.href = "./login.html";
    }
};

const usuarioExiste = (correoUsuario, contrasenaUsuario) => {
    const personas = localStorage.getItem(PERSONAS);

    if (personas !== null) {
        const personasArray = JSON.parse(personas);

        for (const persona of personasArray) {
            if (correoUsuario === persona.email && contrasenaUsuario === persona.password) {
                return true;
            }
        }
    }

    return false;
};

export const validarUsuario = (correoUsuario, contrasenaUsuario) => {
    if (usuarioExiste(correoUsuario, contrasenaUsuario)) {
        localStorage.setItem(USUARIO, correoUsuario);
        window.location.href = "./mainpage.html";
    } else {
        alert("El usuario no existe");
    }
};

export const registrarPersona = (correoPersona, contrasenaPersona) => {
    const personas = localStorage.getItem(PERSONAS);

    if (personas === null) {
        const persona = {
            email: correoPersona,
            password: contrasenaPersona,
            favoritos: []
        };

        const personasArray = [persona];

        localStorage.setItem(PERSONAS, JSON.stringify(personasArray));
    } else {
        const personasArray = JSON.parse(personas);

        const persona = {
            email: correoPersona,
            password: contrasenaPersona,
            favoritos: []
        };

        personasArray.push(persona);
        localStorage.setItem(PERSONAS, JSON.stringify(personasArray));
    }
};


export const cerrarSesion = () => {
    localStorage.removeItem(USUARIO);
    window.location.reload();
};

export const obtenerUsuario = () => {
    const usuario = localStorage.getItem(USUARIO);
    return usuario;
};
