import { validarUsuario } from "./session.js";

const renderLogin = async () => {
  const formulario = document.querySelector("#formularioLogIn");
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    validarUsuario(username, password);
  });
};

const USUARIOS = "usuarios";

const buscarUsuario = (nombre) => {
  const usuariosJSON = JSON.parse(localStorage.getItem(USUARIOS));

  if (usuariosJSON === null) {
    return null;
  }

  for (const usuario of usuariosJSON) {
    if (usuario.nombre === nombre) {
      return usuario;
    }
  }

  return null;
};

const guardarUsuario = (usuario) => {
  const usuariosJSON = JSON.parse(localStorage.getItem(USUARIOS)) || [];

  usuariosJSON.push(usuario);

  localStorage.setItem(USUARIOS, JSON.stringify(usuariosJSON));
};

const renderRegistro = async () => {
  const form = document.querySelector("#registro");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    const usuarioExistente = buscarUsuario(nombre);

    if (usuarioExistente !== null) {
      alert("El usuario ya existe");
      return;
    }

    const usuario = {
      nombre,
      password,
    };

    guardarUsuario(usuario);

    alert("Usuario registrado con éxito");
    window.location.href = "mainpage.html";
  });
};

window.onload = () => {
  renderLogin();
};