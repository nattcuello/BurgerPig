// Función para abrir el primer pop-up
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('popup-overlay').style.display = 'block';
}

// Función para abrir el segundo pop-up
function openSecondPopup() {
    document.getElementById('second-popup').style.display = 'flex';
    document.getElementById('second-popup-overlay').style.display = 'block';
}

// Función para cerrar el primer pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-overlay').style.display = 'none';
}

// Función para cerrar el segundo pop-up
function closeSecondPopup() {
    document.getElementById('second-popup').style.display = 'none';
    document.getElementById('second-popup-overlay').style.display = 'none';
}
    
    document.getElementById('accept-popup').addEventListener('click', closePopup);
    document.getElementById('accept-second-popup').addEventListener('click', closeSecondPopup);
    
    document.getElementById('popup-overlay').addEventListener('click', closePopup);
    
    document.getElementById('second-popup-overlay').addEventListener('click', closeSecondPopup);
    
    const toggleButton = document.getElementById("toggleButton");
    const toggleButton2 = document.getElementById("toggleButton2");
    const toggleButton3 = document.getElementById("toggleButton3");
    
    let phase = 1;
    let phase2 = 1;
    let phase3 = 1;
    
// Toggle button 1
toggleButton.addEventListener("click", function() {
    toggleButton.classList.remove("phase1", "phase2", "phase3");
    if (phase === 1) {
        toggleButton.classList.add("phase2");
        phase = 2;
    } else if (phase === 2) {
        toggleButton.classList.add("phase3");
        phase = 3;
      openSecondPopup();  // Abre el segundo pop-up en la fase es 3
    } else {
        toggleButton.classList.add("phase1");
        phase = 1;
    
    }
});


// Toggle button 2
toggleButton2.addEventListener("click", function() {
    toggleButton2.classList.remove("phase_1", "phase_2", "phase_3");
    if (phase2 === 1) {
        toggleButton2.classList.add("phase_2");
        phase2 = 2;
      openPopup();  // Abre el primer pop-up
    } else if (phase2 === 2) {
        toggleButton2.classList.add("phase_3");
        phase2 = 3;
      openSecondPopup();  // Abre el segundo pop-up en la fase es 3
    } else {
        toggleButton2.classList.add("phase_1");
        phase2 = 1;
    }
});

// Toggle button 3
toggleButton3.addEventListener("click", function() {
    toggleButton3.classList.remove("phase-1", "phase-2", "phase-3");
    if (phase3 === 1) {
        toggleButton3.classList.add("phase-2");
        phase3 = 2;
    } else if (phase3 === 2) {
        toggleButton3.classList.add("phase-3");
        phase3 = 3;
      openSecondPopup();  // Abre el segundo pop-up cuando la fase es 3
    } else {
        toggleButton3.classList.add("phase-1");
        phase3 = 1;
    }
});
