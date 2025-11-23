document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (typeof productos !== "undefined" && productos[id]) {
    const producto = productos[id];

    document.getElementById("nombre").textContent = producto.nombre;
    document.getElementById("descripcion").textContent = producto.descripcion;
    document.getElementById("resumen").textContent = producto.resumen;
    document.getElementById("recomendado").textContent = producto.recomendado;
    document.getElementById("modoUso").textContent = producto.modoUso;
    document.getElementById("precio").textContent = producto.precio;
    document.getElementById("precio-barra").textContent = producto.precio;
    document.getElementById("imagen").src = producto.imagen;

    const btnComprar = document.getElementById("btn-comprar");
    if (btnComprar) {

    btnComprar.addEventListener("click", () => {
        const item = {
        id: id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
        cantidad: 1
        };

        if (window.opener && !window.opener.closed) {
        window.opener.postMessage({ tipo: "agregarCarrito", producto: item }, "*");
        }

        alert("Producto enviado al carrito");
        window.close();
        });
    }
    } else {
    document.body.innerHTML = "<h2>Producto no encontrado</h2>";
    }
});