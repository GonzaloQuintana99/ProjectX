let products = [
    {
        title: "MEMORIA GEIL DDR4 16GB 3000MHz SUPER LUCE RGB BLACK",
        price: 39550,
        category: "Memorias Ram",
        stock: 10,
        img: "./img/memoria-geil.jpg"
    },
    {
        title: "GABINETE KOTLINK INSPIRE K3 RGB M-ATX TEMPLADO",
        price: 24499,
        category: "Gabinetes",
        stock: 10,
        img: "./img/gabinete-kolink-inspire.jpg"
    },
    {
        title: "PROCESADOR AMD RYZEN 3 3200G 4.0GHZ TURBO + RADEON VEGA 8",
        price: 58900,
        category: "Procesadores",
        stock: 10,
        img: "./img/procesador-ryze-3200.jpg"
    },
    {
        title: "TECLADO REDRAGON K509 DYAUS ESPAÑOL RETROILUMINADO 7 COLORES",
        price: 10499,
        category: "Perifericos",
        stock: 10,
        img: "./img/teclado-redragon-k509.jpg"
    }
]

const divSlider = document.querySelector('.contentProduct');

for (const product of products) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="cardGral">
    <div class="imgContainer">
    <img class="imgProduct" src=${product.img} alt="imagen producto" width="170px" height="150px">
    </div>
    <div class="infoProduct">
    <h2 class="titleProduct">${product.title}</h2>
    <p class="priceProduct">Precio: <span>$${product.price}</span></p>
    <p class="stockProduct">Stock: ${product.stock}</p>
    <button class="btnProduct"><i class="fa-solid fa-cart-shopping cart"></i> Agregar al Carrito</button>
    </div>
    </div>
    `
    divSlider.append(newDiv);
} 
