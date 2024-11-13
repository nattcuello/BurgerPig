function addAddress() {
    // Obtener la dirección ingresada
    const addressInput = document.getElementById("addressInput").value;

    // Validar que no esté vacío
    if (addressInput) {
        // Crear un nuevo elemento de dirección
        const addressList = document.getElementById("addressList");
        const newAddressItem = document.createElement("div");
        newAddressItem.classList.add("address-item");

        // Añadir contenido HTML para la nueva dirección
        newAddressItem.innerHTML = `
            <p><strong>Nueva dirección guardada:</strong> ${addressInput}</p>
            <button class="accept-button btn btn-success">Aceptar</button>
        `;

        // Añadir la nueva dirección a la lista de direcciones
        addressList.appendChild(newAddressItem);

        // Limpiar el campo de entrada
        document.getElementById("addressInput").value = "";
    } else {
        alert("Por favor, ingresa una dirección.");
    }
}

function searchAddress() {
    const address = document.getElementById("addressInput").value;

    if (address) {
        // Aquí puedes incluir tu código de geolocalización o búsqueda de la dirección
        showConfirmModal(address); // Mostrar el modal de confirmación
    } else {
        alert("Por favor, ingresa una dirección.");
    }
}

function showConfirmModal(address) {
    const confirmModal = document.getElementById("confirmModal");
    confirmModal.style.display = "flex";

    const confirmButton = document.getElementById("confirmButton");
    const cancelButton = document.getElementById("cancelButton");

    // Confirmar y agregar la dirección a la lista
    confirmButton.onclick = () => {
        addAddressToList(address);
        confirmModal.style.display = "none";
    };

    // Cancelar la acción
    cancelButton.onclick = () => {
        confirmModal.style.display = "none";
    };
}

function addAddressToList(address) {
    const addressList = document.getElementById("addressList");
    const newAddressItem = document.createElement("div");
    newAddressItem.className = "address-item";
    newAddressItem.innerHTML = `
        <p><strong>Nueva dirección:</strong> ${address}</p>
        <button class="accept-button btn btn-success">Aceptar</button>
    `;
    addressList.appendChild(newAddressItem);
}

