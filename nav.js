var openMenu = document.getElementById("open-menu");
var closeMenu = document.getElementById("close-menu");
var menu = document.getElementById("menu");

// Agregar un controlador de eventos para abrir el menú
openMenu.addEventListener("click", function() {
    menu.classList.add("active");
});

// Agregar un controlador de eventos para cerrar el menú
closeMenu.addEventListener("click", function() {
    menu.classList.remove("active");
});
