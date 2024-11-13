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
    if (currentValue > 0) {
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
setupCounter('counter7', 'increment7', 'decrement7', 3);
setupCounter('counter8', 'increment8', 'decrement8', 3);
setupCounter('counter9', 'increment9', 'decrement9', 3);


setupCounter('counter11', 'increment11', 'decrement11', 99);
setupCounter('counter12', 'increment12', 'decrement12', 99);
setupCounter('counter13', 'increment13', 'decrement13', 99);
setupCounter('counter14', 'increment14', 'decrement14', 99);
setupCounter('counter15', 'increment15', 'decrement15', 99);
setupCounter('counter16', 'increment16', 'decrement16', 99);
setupCounter('counter17', 'increment17', 'decrement17', 99);
setupCounter('counter18', 'increment18', 'decrement18', 99);


function setupCounterTotal(counterId, incrementId, decrementId, maxSlides) {
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


setupCounterTotal('counter10', 'increment10', 'decrement10', 100);