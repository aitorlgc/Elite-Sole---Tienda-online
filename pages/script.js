let carrito = {};

function agregarAlCarrito(producto, precio) {
    if (carrito[producto]) {
        carrito[producto].cantidad++;
    } else {
        carrito[producto] = { precio, cantidad: 1 };
    }
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = {};
    actualizarCarrito();
}

function quitarDelCarrito(producto) {
    if (carrito[producto] && carrito[producto].cantidad > 0) {
        carrito[producto].cantidad--;
        if (carrito[producto].cantidad === 0) {
            delete carrito[producto];
        }
        actualizarCarrito();
    }
}

function calcularTotal() {
    let total = 0;
    Object.keys(carrito).forEach(producto => {
        total += carrito[producto].precio * carrito[producto].cantidad;
    });
    return total;
}

function actualizarCarrito() {
    const itemsCarrito = document.getElementById('itemsCarrito');
    itemsCarrito.innerHTML = '';

    Object.keys(carrito).forEach(producto => {
        const div = document.createElement('div');
        div.innerHTML = `${producto} - Cantidad: ${carrito[producto].cantidad} - Precio: ${carrito[producto].precio * carrito[producto].cantidad} <button onclick="quitarDelCarrito('${producto}')">Quitar uno</button>`;
        itemsCarrito.appendChild(div);
    });

    const totalCarrito = document.getElementById('totalCarrito');
    totalCarrito.textContent = `Total: $${calcularTotal()}`;
}
