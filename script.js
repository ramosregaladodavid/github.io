let carritoItems = [];
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

document.getElementById('img-carrito').addEventListener('click', () => {
  const carrito = document.getElementById('carrito');
  carrito.style.display = carrito.style.display === 'block' ? 'none' : 'block';
});

function cargarEventListeners(){
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    const ofertas = document.querySelector('.ofertas-inauguracion');
    ofertas.addEventListener('click', comprarElemento);
}

function comprarElemento(e){
        if(e.target.classList.contains('agregar-carrito')){
        e.preventDefault();
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }}

function leerDatosElemento(elemento) {
  const id = elemento.querySelector('.agregar-carrito').getAttribute('data-id');
  const existente = carritoItems.find(item => item.id === id);
  if (existente) {
    existente.cantidad += 1;
  } else {
      const imgElement = elemento.querySelector('img');
      let imagenSrc = imgElement.getAttribute('src'); // Obtener el atributo tal como está
      
      const infoElemento = {
      imagen: imagenSrc,
      titulo: elemento.querySelector('h3').textContent,
      precio: elemento.querySelector('.precio').textContent,
      id: id,
      cantidad: 1
    };
    carritoItems.push(infoElemento);
  }
    actualizarCarrito(id);
}

function normalizarRutaImagen(ruta) {
  // Si ya está normalizada (empieza con imagenes/), devolverla tal cual
  if (ruta.includes('imagenes/')) {
    // Extraer solo la parte que queremos
    const indice = ruta.indexOf('imagenes/');
    return ruta.substring(indice);
  }
  return ruta;
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    const rutaNormalizada = normalizarRutaImagen(elemento.imagen);
    row.innerHTML = `
    <td><img src="${rutaNormalizada}" width="80" alt="Producto"></td>
    <td>${elemento.titulo}</td>
    <td>${elemento.precio}</td>
    <td><a href="#" class="borrar" data-id="${elemento.id}">X</a></td>
    `;
  lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    if (e.target.classList.contains('borrar')) {
    const id = e.target.getAttribute('data-id');
    carritoItems = carritoItems.filter(item => item.id !== id);
    actualizarCarrito();
  }
}

function vaciarCarrito() {
  let confirmar = false;
  while(!confirmar){
  const respuesta = prompt("¿Está seguro de que desea vaciar el carrito (si/no)").toLowerCase();
  if(respuesta ==="si"){
    carritoItems = [];
  actualizarCarrito();
  confirmar = true;}
  else if(respuesta == "no") {
    alert("Operacion cancelada");
    confirmar = true;}
    else{alert("Responda si o no");}
  }
}

function actualizarCarrito(ultimoId) {
  document.getElementById('carrito').style.display = 'block';
  lista.innerHTML = "";
  let total=0;
  const fragmento = document.createDocumentFragment();

  for(let i = 0; i<carritoItems.length;i++){
    const elemento = carritoItems[i];
    const precioNumerico = parseFloat(elemento.precio.replace(/[^\d.]/g, ''));
    total += precioNumerico*elemento.cantidad;

    const rutaNormalizada = normalizarRutaImagen(elemento.imagen);
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${rutaNormalizada}" width="80" alt="Producto"></td>
      <td>${elemento.titulo}</td>
      <td>${elemento.precio}</td>
      <td>${elemento.cantidad}</td>
      <td><a href="#" class="borrar" data-id="${elemento.id}">X</a></td>
    `;

    // Solo resaltar el último producto agregado
    if (elemento.id === ultimoId) {
      row.classList.add("seleccionado");
      setTimeout(() => row.classList.remove("seleccionado"), 1000);
    }

    fragmento.appendChild(row);
  };

  lista.appendChild(fragmento);
  document.getElementById('total-carrito').textContent = `Total: S/ ${total.toFixed(2)}`;
  animarCarrito();
}

cargarEventListeners();

const modal = document.getElementById("miModal");
const abrirModal = document.getElementById("abrirModal");
const cerrarModal = document.querySelector(".cerrar");

abrirModal.addEventListener("click", () => {
  modal.style.display = "block";
});

cerrarModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

alert("¡Bienvenido a Yelina Suplementos!");

const nombreUsuario = prompt("¿Cuál es tu nombre?");
if (nombreUsuario) {
  alert(`Hola, ${nombreUsuario}. ¡Gracias por visitarnos!`);
}

const deseaOferta = confirm("¿Deseas ver una oferta especial?");
if (deseaOferta) {
  document.getElementById("abrirModal").click();
  alert("¡No hay problema! Puedes explorar nuestros productos.");
}
function saludoInteractivo() {
  alert("¡Bienvenido a Yelina Suplementos!");
  const nombreUsuario = prompt("¿Cuál es tu nombre?");
  if (nombreUsuario) {
    alert(`Hola, ${nombreUsuario}. ¡Gracias por visitarnos!`);
  }
  const deseaOferta = confirm("¿Deseas ver una oferta especial?");
  if (deseaOferta) {
    document.getElementById("abrirModal").click();
  } else {
    alert("¡No hay problema! Puedes explorar nuestros productos.");
  }
}

document.getElementById('verGrupo1').addEventListener('click', () => {
  document.querySelector('.grupo-1').style.display = 'grid';
  document.querySelector('.grupo-2').style.display = 'none';
  document.querySelector('.grupo-3').style.display = 'none';
});

document.getElementById('verGrupo2').addEventListener('click', () => {
  document.querySelector('.grupo-1').style.display = 'none';
  document.querySelector('.grupo-2').style.display = 'grid';
  document.querySelector('.grupo-3').style.display = 'none';
});

document.getElementById('verGrupo3').addEventListener('click', () => {
  document.querySelector('.grupo-1').style.display = 'none';
  document.querySelector('.grupo-2').style.display = 'none';
  document.querySelector('.grupo-3').style.display = 'grid';
});

document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('#formularioContacto');
  formulario.addEventListener('submit', function (e) {
    e.preventDefault()
  const nombre = document.querySelector('input[name="nombre"]')?.value.trim() || "";
  const correo = document.querySelector('input[name="correo"]')?.value.trim() || "";
  const telefono = document.querySelector('input[name="telefono"]')?.value.trim()|| "";
  const mensaje = document.querySelector('textarea[name="mensaje"]')?.value.trim()|| "";
  let errores = [];
  if (nombre.length < 3) {errores.push("El nombre debe tener al menos 3 caracteres.");}
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {errores.push("Correo electrónico no valido");}
  if (!/^\d{9}$/.test(telefono)) {errores.push("Teléfono debe tener 9 dígitos");}
  if (mensaje.length < 10) {errores.push("El mensaje debe tener al menos 10 caracteres");}
  if (errores.length > 0) {
    alert("Errores:\n" + errores.join("\n"));
  } else {
    alert("Formulario enviado correctamente");
    window.location.href = "gracias.html";
  }
});});

function animarCarrito() {
  const carrito = document.getElementById('carrito');
  carrito.style.animation = "latido 0.5s ease";
  setTimeout(() => carrito.style.animation = "", 500);
}

function mostrarTodosLosGrupos() {
  document.querySelectorAll('.product-content').forEach(grupo => {
    grupo.style.display = 'grid';
  });
}

document.getElementById('buscador').addEventListener('keyup', function() {
  const texto = this.value.toLowerCase();
  mostrarTodosLosGrupos();
  document.querySelectorAll('.product').forEach(producto => {
    const nombre = producto.querySelector('h3').textContent.toLowerCase();
    producto.style.display = nombre.includes(texto) ? 'block' : 'none';
  });
});

document.getElementById('filtroTipo').addEventListener('change', function() {
  const tipo = this.value.toLowerCase();
  mostrarTodosLosGrupos();
  document.querySelectorAll('.product').forEach(producto => {
    const alt = producto.querySelector('img').alt.toLowerCase();
    producto.style.display = alt.includes(tipo) || tipo === "" ? 'block' : 'none';
  });
});

document.getElementById('calculadoraProteina').addEventListener('submit', function(e) {
  e.preventDefault();
  const peso = parseFloat(document.getElementById('peso').value);
  const edad = parseInt(document.getElementById('edad').value);
  const objetivo = document.getElementById('objetivo').value;
  let factor = 1.0; 
  if (edad >= 18 && edad <= 30) {
    if (objetivo === "mantenimiento") factor = 1.0;
    if (objetivo === "definicion") factor = 1.8;
    if (objetivo === "masa") factor = 2.2;
  } else if (edad >= 31 && edad <= 50) {
    if (objetivo === "mantenimiento") factor = 1.1;
    if (objetivo === "definicion") factor = 2.0;
    if (objetivo === "masa") factor = 2.4;
  } else if (edad >= 51 && edad <= 65) {
    if (objetivo === "mantenimiento") factor = 1.3;
    if (objetivo === "definicion") factor = 2.2;
    if (objetivo === "masa") factor = 2.5;
  } else if (edad > 65) {
    if (objetivo === "mantenimiento") factor = 1.5;
    if (objetivo === "definicion") factor = 2.4;
    if (objetivo === "masa") factor = 2.8;
  }

  const proteina = (peso * factor).toFixed(1);
  alert(`Tu requerimiento diario estimado de proteína es: ${proteina} gramos.`);
});

function abrirVentanaProducto(url) {
  window.open(
    url,
    "detalleProducto",
    "width=1000,height=850,top=50,left=100,resizable=yes,scrollbars=yes"
  );
}
window.addEventListener("message", (event) => {
  if (event.data.tipo === "agregarCarrito") {
    const item = event.data.producto;

    const existente = carritoItems.find(p => p.id === item.id);
    if (existente) {
      existente.cantidad += 1;
    } else {
      carritoItems.push({
        imagen: item.imagen,
        titulo: item.nombre,
        precio: item.precio,
        id: item.id,
        cantidad: 1
      });
    }

    actualizarCarrito(item.id);
    console.log("Producto agregado desde ventana:", item);
    console.log("Ruta de imagen:", item.imagen);
  }
});

// ========== REPRODUCTOR DE VIDEO ALTERNATIVO ==========
document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    
    if (videoPlayer) {
        // Intentar usar un servicio proxy para descargar el video de YouTube
        const videoId = 'K7dOcwMUy2M';
        
        // Usar noCookie embed como alternativa
        const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1`;
        
        // Cambiar a iframe sin cookie para privacidad
        const iframe = document.createElement('iframe');
        iframe.width = '100%';
        iframe.height = '400';
        iframe.src = embedUrl;
        iframe.title = 'Alimentos ricos en proteínas';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.style.borderRadius = '8px';
        iframe.allowFullscreen = true;
        
        // Reemplazar el video con el iframe
        videoPlayer.parentNode.replaceChild(iframe, videoPlayer);
    }
});


// ========== CARRUSEL DE OFERTAS ==========
document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('ofertTrack');
    const prevBtn = document.getElementById('ofertPrev');
    const nextBtn = document.getElementById('ofertNext');
    
    if (!track || !prevBtn || !nextBtn) return; // Si no existe el carrusel, salir
    
    let currentIndex = 0;
    const items = document.querySelectorAll('.ofert-1');
    let itemsPerView = 4; // Desktop
    let autoScrollInterval;
    let totalItems = items.length;
    
    // Crear clones de items para efecto infinito
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
    
    // Obtener items actualizado (original + clones)
    const allItems = document.querySelectorAll('.ofert-1');
    
    // Función para actualizar items por vista según el ancho
    function updateItemsPerView() {
        const width = window.innerWidth;
        if (width <= 480) {
            itemsPerView = 1;
        } else if (width <= 768) {
            itemsPerView = 2;
        } else if (width <= 1024) {
            itemsPerView = 3;
        } else {
            itemsPerView = 4;
        }
    }
    
    // Función para mover el carrusel
    function moveCarousel(direction) {
        updateItemsPerView();
        
        if (direction === 'next') {
            currentIndex += 1;
        } else {
            currentIndex -= 1;
        }
        
        updateTrackPosition();
        
        // Reiniciar al llegar al final para efecto infinito
        if (currentIndex >= totalItems) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = 0;
                updateTrackPosition();
                setTimeout(() => {
                    track.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                }, 50);
            }, 600);
        } else if (currentIndex < 0) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = totalItems - 1;
                updateTrackPosition();
                setTimeout(() => {
                    track.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                }, 50);
            }, 600);
        }
    }
    
    // Función para actualizar posición del track
    function updateTrackPosition() {
        updateItemsPerView();
        const itemWidth = track.offsetWidth / itemsPerView;
        const offset = -currentIndex * itemWidth;
        track.style.transform = `translateX(${offset}px)`;
    }
    
    // Función para auto-scroll
    function autoScroll() {
        moveCarousel('next');
    }
    
    // Event listeners para botones
    nextBtn.addEventListener('click', () => {
        clearInterval(autoScrollInterval);
        moveCarousel('next');
        startAutoScroll();
    });
    
    prevBtn.addEventListener('click', () => {
        clearInterval(autoScrollInterval);
        moveCarousel('prev');
        startAutoScroll();
    });
    
    // Iniciar auto-scroll
    function startAutoScroll() {
        autoScrollInterval = setInterval(autoScroll, 5000); // Cambiar cada 5 segundos
    }
    
    // Pausar auto-scroll al pasar mouse
    track.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });
    
    track.addEventListener('mouseleave', () => {
        startAutoScroll();
    });
    
    // Ajustar al redimensionar la ventana
    window.addEventListener('resize', () => {
        updateTrackPosition();
    });
    
    // Inicialización
    updateItemsPerView();
    updateTrackPosition();
    startAutoScroll();
});
