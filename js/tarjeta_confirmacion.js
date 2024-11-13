// Obtener los elementos del DOM
const botonAceptar = document.getElementById("botonAceptar");
const popupOverlay = document.getElementById("second-popup-overlay");
const popup = document.getElementById("second-popup");
const acceptButton = document.getElementById("accept-second-popup");
const closePopup = document.getElementById("close-second-popup");

// Función para mostrar el popup
function mostrarPopup() {
  popupOverlay.style.display = "block";
  popup.style.display = "block";
}

// Función para cerrar el popup
function cerrarPopup() {
  popupOverlay.style.display = "none";
  popup.style.display = "none";
}

// Evento para abrir el popup cuando se hace clic en ACEPTAR
botonAceptar.addEventListener("click", mostrarPopup);

// Evento para cerrar el popup cuando se hace clic en el botón ACEPTAR dentro del popup
acceptButton.addEventListener("click", cerrarPopup);

// Evento para cerrar el popup si el usuario cierra el popup manualmente
closePopup.addEventListener("click", cerrarPopup);
