const productos = {
    "1": {
    nombre: "Proteina Whey Concentrada 1kg",
    descripcion: "Proteína de alta calidad para recuperación muscular y desarrollo magro. Ideal para quienes buscan aumentar masa muscular sin exceso de grasa.",
    resumen: "Suplemento proteico con excelente perfil de aminoácidos, ideal para recuperación post-entreno y desarrollo muscular magro.",
    precio: "S/ 130.00",
    imagen: "../imagenes/concentrada333.png",
    recomendado: "Deportistas, personas en fase de volumen, usuarios con entrenamiento regular",
    modoUso: "Tomar 1 scoop (aprox. 30g) mezclado con agua o leche después del entrenamiento. También puede usarse como complemento en el desayuno."
    },
    "2": {
    nombre: "Proteina Whey Aislada 1Kg",
    descripcion: "Fórmula ultra filtrada, baja en lactosa y carbohidratos.",
    resumen: "Ideal para definición muscular y dietas bajas en carbohidratos.",
    precio: "S/ 180.00",
    imagen: "../imagenes/aislada2.png",
    recomendado: "Personas con intolerancia a la lactosa, atletas en definición",
    modoUso: "Consumir 1 scoop (30g) con agua después del entrenamiento."
    },
    "3": {
    nombre: "Proteina Whey Hidrolizada 1kg",
    descripcion: "Absorción rápida para recuperación post-entreno.",
    resumen: "Proteína predigerida para atletas exigentes.",
    precio: "S/ 200.00",
    imagen: "../imagenes/hidrolizada2_.jpg",
    recomendado: "Atletas de alto rendimiento, usuarios que buscan rápida recuperación",
    modoUso: "Tomar 1 scoop inmediatamente después del entrenamiento."
    },
    "4": {
    nombre: "Creatina Monohidratada 300 g",
    descripcion: "Aumenta fuerza, potencia y volumen muscular.",
    resumen: "Suplemento clásico para mejorar rendimiento en entrenamientos intensos.",
    precio: "S/ 90.00",
    imagen: "../imagenes/creatina2.png",
    recomendado: "Deportistas de fuerza, crossfit, culturismo",
    modoUso: "Consumir 5g diarios disueltos en agua o jugo."
    },
    "5": {
    nombre: "Glutamina Micronizada 300 g",
    descripcion: "Apoya la recuperación muscular y la salud intestinal.",
    resumen: "Aminoácido esencial para recuperación y sistema inmune.",
    precio: "S/ 110.00",
    imagen: "../imagenes/glutamina2_.jpg",
    recomendado: "Atletas en periodos de alta carga, personas con estrés físico",
    modoUso: "Tomar 5g después del entrenamiento o antes de dormir."
    },
    "6": {
    nombre: "Preentreno energizante 300 g",
    descripcion: "Con cafeína, beta-alanina y citrulina.",
    resumen: "Mejora el enfoque, energía y resistencia.",
    precio: "S/ 95.00",
    imagen: "../imagenes/preentreno2.jpeg",
    recomendado: "Personas que buscan más energía y concentración en entrenamientos",
    modoUso: "Consumir 1 medida 20-30 minutos antes del entrenamiento."
    },
    "7": {
    nombre: "Multivitaminico 60 cápsulas",
    descripcion: "Vitaminas y minerales esenciales para energía, inmunidad y bienestar general.",
    resumen: "Apoyo integral para salud y rendimiento diario.",
    precio: "S/ 60.00",
    imagen: "../imagenes/multi-vitaminas-60-capsulas.jpg",
    recomendado: "Adultos con dietas incompletas, personas con alta demanda energética",
    modoUso: "Tomar 1 cápsula diaria con alimentos."
    },
    "8": {
    nombre: "Quemador de grasa 90 cápsulas",
    descripcion: "Termogénico natural con té verde y L-carnitina.",
    resumen: "Apoya la pérdida de grasa y energía.",
    precio: "S/ 85.00",
    imagen: "../imagenes/quemado222.png",
    recomendado: "Personas en programas de reducción de peso",
    modoUso: "Tomar 1 cápsula antes de las comidas principales."
    },
    "9": {
    nombre: "Maca plus 120 cápsulas",
    descripcion: "Maca negra y roja para energía, vitalidad y equilibrio hormonal.",
    resumen: "Suplemento natural para vigor y bienestar.",
    precio: "S/ 75.00",
    imagen: "../imagenes/maca2.png",
    recomendado: "Adultos que buscan energía y balance hormonal",
    modoUso: "Consumir 2 cápsulas al día con alimentos."
    },
    "10": {
    nombre: "Colageno Hidrolizado 300 g",
    descripcion: "Fortalece articulaciones, piel y cabello. Enriquecido con vitamina C.",
    resumen: "Apoyo integral para articulaciones y belleza.",
    precio: "S/ 95.00",
    imagen: "../imagenes/colageno2_.jpg",
    recomendado: "Personas con desgaste articular, adultos mayores, cuidado estético",
    modoUso: "Tomar 10g disueltos en agua o jugo diariamente."
    },
    "11": {
    nombre: "Omega 3 90 cápsulas",
    descripcion: "Ácidos grasos esenciales para salud cardiovascular y cerebral.",
    resumen: "Fuente de EPA y DHA para bienestar general.",
    precio: "S/ 80.00",
    imagen: "../imagenes/omega32_.jpg",
    recomendado: "Adultos que buscan mejorar salud cardiovascular y cognitiva",
    modoUso: "Consumir 1 cápsula dos veces al día con alimentos."
    },
    "12": {
    nombre: "Ashwagandha 60 cápsulas",
    descripcion: "Adaptógeno natural que reduce el estrés y mejora el sueño.",
    resumen: "Planta ayurvédica para equilibrio y relajación.",
    precio: "S/ 70.00",
    imagen: "../imagenes/ashwana2_.jpg",
    recomendado: "Personas con estrés, ansiedad o problemas de sueño",
    modoUso: "Tomar 1 cápsula al día preferiblemente en la noche."
    },
    "13": {
    nombre: "Magnesio quelado 60 cápsulas",
    descripcion: "Mejora la función muscular, el sueño y el sistema nervioso.",
    resumen: "Mineral esencial con alta absorción.",
    precio: "S/ 55.00",
    imagen: "../imagenes/MagnesioQ_2.jpg",
    recomendado: "Personas con calambres, problemas de sueño o fatiga",
    modoUso: "Consumir 1 cápsula diaria antes de dormir."
    },
    "14": {
    nombre: "BCAA 2:1:1 saborizado 360 g",
    descripcion: "Aminoácidos esenciales para evitar el catabolismo muscular y mejorar la recuperación.",
    resumen: "Fórmula de leucina, isoleucina y valina.",
    precio: "S/ 95.00",
    imagen: "../imagenes/bcc2.jpg",
    recomendado: "Atletas que buscan mejorar recuperación y evitar pérdida muscular",
    modoUso: "Tomar 1 medida durante o después del entrenamiento."
    }
};

