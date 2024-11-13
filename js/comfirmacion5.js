
  // Función para mostrar el popup después de 2 minutos (120000 ms)
  setTimeout(function() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup-overlay').style.display = 'block';
  },2000); // 120000 milisegundos = 2 minutos

  // Cerrar popup al hacer clic en el botón "ACEPTAR"
  document.getElementById('accept-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-overlay').style.display = 'none';
  });

  // Mostrar segundo popup después de cerrar el primero
  document.getElementById('accept-popup').addEventListener('click', function() {
    setTimeout(function() {
      document.getElementById('second-popup').style.display = 'block';
      document.getElementById('second-popup-overlay').style.display = 'block';
    }, 500); // 500 milisegundos de espera tras cerrar el primer popup
  });

  // Cerrar el segundo popup al hacer clic en el botón "ACEPTAR"
  document.getElementById('accept-second-popup').addEventListener('click', function() {
    document.getElementById('second-popup').style.display = 'none';
    document.getElementById('second-popup-overlay').style.display = 'none';
  });

