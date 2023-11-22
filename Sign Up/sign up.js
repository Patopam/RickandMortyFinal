document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var termsAccepted = document.getElementById("terms").checked;

    if (password !== password2) {
        alert("Las contraseñas no coinciden.");
    } else if (!termsAccepted) {
        alert("Debes aceptar los términos y condiciones.");
    } else {
        var user = {
            username: username,
            email: email,
            password: password,
        };

        var users = JSON.parse(localStorage.getItem("users")) || [];

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Registro exitoso. Redirigiendo...");
        window.location.href = "../Log In/login.html";
    }
});
