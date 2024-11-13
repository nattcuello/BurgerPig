// Lógica para mostrar el popup al hacer clic en el botón "ACEPTAR"
document.getElementById('botonAceptar').addEventListener('click', function() {
    // Mostrar el popup y el overlay
    document.getElementById('second-popup').style.display = 'block';
    document.getElementById('second-popup-overlay').style.display = 'block';
  });

  // Lógica para cerrar el popup cuando se hace clic en el botón "ACEPTAR" dentro del popup
  document.getElementById('accept-second-popup').addEventListener('click', function() {
    // Ocultar el popup y el overlay
    document.getElementById('second-popup').style.display = 'none';
    document.getElementById('second-popup-overlay').style.display = 'none';
  });