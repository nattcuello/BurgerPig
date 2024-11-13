// Mostrar el primer popup al hacer clic en el botón de la tarjeta "ACEPTAR" (Primera tarjeta)
document.getElementById("show-first-popup").addEventListener("click", function() {
    document.getElementById("first-popup").style.display = "block"; // Mostrar el primer popup
});

// Mostrar el primer popup al hacer clic en el botón de la tarjeta "ACEPTAR" (Segunda tarjeta)
document.getElementById("show-second-popup").addEventListener("click", function() {
    document.getElementById("first-popup").style.display = "block"; // Mostrar el primer popup
});

// Cerrar el primer popup cuando se haga clic en el botón "NO, GRACIAS"
document.getElementById("decline-first-popup").addEventListener("click", function() {
    document.getElementById("first-popup").style.display = "none"; // Ocultar el primer popup
});

// Mostrar el segundo popup cuando se haga clic en el botón "ACEPTAR" del primer popup
document.getElementById("accept-first-popup").addEventListener("click", function() {
    document.getElementById("first-popup").style.display = "none"; // Ocultar el primer popup
    document.getElementById("second-popup").style.display = "block"; // Mostrar el segundo popup
});

// Cerrar el segundo popup cuando se haga clic en el botón "NO, GRACIAS"
document.getElementById("decline-second-popup").addEventListener("click", function() {
    document.getElementById("second-popup").style.display = "none"; // Ocultar el segundo popup
});

// Cerrar el segundo popup cuando se haga clic en el botón "ACEPTAR"
document.getElementById("accept-second-popup").addEventListener("click", function() {
    document.getElementById("second-popup").style.display = "none"; // Ocultar el segundo popup
});
  
// Cerrar ambos popups al hacer clic en el "x" de cada uno
document.getElementById("close-first-popup").addEventListener("click", function() {
    document.getElementById("first-popup").style.display = "none"; // Ocultar el primer popup
});
document.getElementById("close-second-popup").addEventListener("click", function() {
    document.getElementById("second-popup").style.display = "none"; // Ocultar el segundo popup
});
