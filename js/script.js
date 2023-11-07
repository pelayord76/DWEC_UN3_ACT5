window.addEventListener('load', cargaPagina);

function cargaPagina() {
    var camposTexto = document.querySelectorAll('input[type=text]');
    camposTexto.forEach(function (campo) {
        campo.addEventListener('blur', salCampoTexto);
    });

    var campoPassword2 = document.getElementById('password2');
    campoPassword2.addEventListener('blur', salPassword2);

    var campoBoton = document.getElementById('enviar');
    campoBoton.addEventListener('click', validaFormulario);
}

function salCampoTexto(texto) {
    var contenido = texto.target;
    contenido.value = contenido.value.toUpperCase();
}

function salPassword2() {
    var password = document.getElementById('password').value;
    var password2 = this.value;
    var errorPassword2 = document.getElementById('error_password2');

    if (password === password2 && password.length >= 8) errorPassword2.style.display = 'none';
    else errorPassword2.style.display = 'block';
}

function validaFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    var dni = document.getElementById('dni').value;
    var email = document.getElementById('email').value;
    var genero = document.querySelector('input[name="genero"]:checked').value;
    var boletin = document.getElementById('boletin').checked;
    var ofertas = document.getElementById('ofertas').checked;
    var favorito = document.getElementById('favorito').value;
    var comentario = document.getElementById('comentario').value;

    console.log('Nombre:', nombre);
    console.log('Apellidos:', apellidos);
    console.log('Fecha de nacimiento:', fechaNacimiento);
    console.log('DNI:', dni);
    console.log('Email:', email);
    console.log('Género:', genero);
    console.log('Suscribirme al boletín de novedades:', boletin);
    console.log('Informarme sobre ofertas:', ofertas);
    console.log('Producto favorito:', favorito);
    console.log('Comentario:', comentario);
}