var telefonoInput = document.getElementById("telefono");
var enviarButton = document.getElementById("enviar"); 
var formulario = document.getElementById("contacto");

// Agrega un controlador de eventos para el evento "input"
telefonoInput.addEventListener("input", function(event) {
    // Elimina cualquier carácter no numérico del valor del campo
    this.value = this.value.replace(/\D/g, "");

    // Si la longitud del valor es igual a 10, habilita el botón "Enviar"
    if (this.value.length === 10) {
        enviarButton.disabled = false;
    } else {
        enviarButton.disabled = true;
    }

    // Limita la longitud del valor a 10 dígitos
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});
