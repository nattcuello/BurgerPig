// Función para manejar el incremento y decremento de contadores
function setupCounter(counterId, incrementId, decrementId, maxSlides) {
    document.getElementById(incrementId).addEventListener('click', function() {
      var counter = document.getElementById(counterId);
      var currentValue = parseInt(counter.value);
      if (currentValue < maxSlides) {
        counter.value = currentValue + 1;
      }
    });
  
    document.getElementById(decrementId).addEventListener('click', function() {
      var counter = document.getElementById(counterId);
      var currentValue = parseInt(counter.value);
      if (currentValue > 1) {
        counter.value = currentValue - 1;
      }
    });
  }
  
  // Configura el contador para cada carrusel
  setupCounter('counter1', 'increment1', 'decrement1', 3);
  setupCounter('counter2', 'increment2', 'decrement2', 3);
  setupCounter('counter3', 'increment3', 'decrement3', 3);
  setupCounter('counter4', 'increment4', 'decrement4', 3);
  setupCounter('counter5', 'increment5', 'decrement5', 3);
  setupCounter('counter6', 'increment6', 'decrement6', 3);
  // Añadir el setup para carrusel 3, 4, 5 y 6 con sus IDs
  