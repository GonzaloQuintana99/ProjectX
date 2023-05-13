// CARRITO

let cart = [];


const tabla = document.getElementById("tbody");
const totalValue = document.querySelector(".totalCart");
const btnaddcart = document.querySelectorAll(".btnProduct");

for (let btn of btnaddcart) {
    btn.addEventListener("click", addToCart);
  }
  
  function addToCart(e){
  
    if(e.target.classList.contains("btnProduct")) {
      let product = e.target.parentElement.parentElement;
      let infoProduct = {
        quantity: 1,
        title: product.querySelector("h2").textContent,
        price: product.querySelector("span").textContent,
        img: product.querySelector("img").src,
      };
  
      let exist = cart.some(product => product.title === infoProduct.title);
  
      if(exist){
        let products = cart.map(product => {
          if(product.title === infoProduct.title){
            product.quantity++;
            return product
          }else{
            return product
          }
        })
  
        cart = [...products]
  
      }else{
  
        cart = [...cart, infoProduct];
  
      }
  
        cartRender();

    }
  }; 
  
  tabla.addEventListener("click", e =>{
  
    if(e.target.classList.contains("delete")) {
      let product = e.target.parentElement.parentElement.parentElement;
      let title = product.querySelector("p").textContent;
  
      cart = cart.filter(
        product => product.title !== title
      );

      Toastify({
  
        text: "Eliminado del carrito",
        position: "left",
        style: {
          background: "red",
          fontSize: "15px",
        },
        duration: 1000
        
        }).showToast();

      cartRender();
    
    }
  });
  
  let cartRender = () => {
    tabla.innerHTML = "";
  
    let total = 0;
    
    cart.forEach(product => {
    let fila = document.createElement("tr");
    fila.innerHTML = `
    <td class="imagenCart"><img src=${product.img}></td>
    <td class="titleCart"><p>${product.title}</p></td>
    <td class="quantityCart">${product.quantity}</td>
    <td class="priceCart">${product.price}</td>
    <td><button class="btn-danger delete">X</button></td>
    `;
  
    tabla.append(fila);
    
    total = total + parseInt(product.quantity * product.price.slice(1));
    

  })
    totalValue.innerText = `Total: $${total}`;
  
  }; 
