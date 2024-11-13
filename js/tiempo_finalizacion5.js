setTimeout(function() {
    document.getElementById("second-popup-overlay").style.display = "block";
    document.getElementById("second-popup").style.display = "block";
}, 2000); // 30,000 milisegundos = 30 segundos

// Cerrar el pop-up cuando se haga clic en el botón "ACEPTAR"
document.getElementById("accept-second-popup").addEventListener("click", function() {
    document.getElementById("second-popup-overlay").style.display = "none";
    document.getElementById("second-popup").style.display = "none";
});