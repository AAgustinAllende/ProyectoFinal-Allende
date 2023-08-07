//proceso de LogIn
let usuario = document.getElementById("username");
let clave = document.getElementById("pass");
if(usuario=="Agustin" || usuario=="Agustin" && clave == "1234"){
  console.log("Bienvenido " + usuario)

}else{
  console.log("datos incorrectos");
}
const logIn = document.getElementById("continue");
const ingreso = document.getElementById("hola");
const registro = document.getElementById("log-in");
logIn.onclick = () =>{
  ingreso.innerText = "Agustin Allende";
  registro.innerText = "Salir";
  logIn.innerText = "Mi perfil";

}

let carro=JSON.parse(localStorage.getItem("carrito")) || [];
let cantidad = document.getElementById("cantidad");
cantidad.innerText=`${carro.length}`;


if(carro.length =! 0){
     for (const viaje of carro){
       document.getElementById("tablabody").innerHTML +=`
     <tr>
         <td>${viaje.id}</td>
         <td>${viaje.destino}</td>
         <td>${viaje.precio}</td>
     </tr>
     `;

   let total = carro.reduce((acumulador,producto) => acumulador + producto.precio, 0);
   document.getElementById("total").innerText = "Total a pagar $: " + total;
 }
}

//agregar las cards
let cards = document.getElementById("cartas");
let tablabody = document.getElementById("tablabody");


for (let i = 0; i < destinosLocales.length; i++) {
  let producto = destinosLocales[i];
  cards.innerHTML += `
  <div class="card" style="width: 18rem;">
  <img src=${producto.foto} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${producto.destino}</h5>
    <p class="card-text">${producto.precio}</p>
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom${i}" aria-controls="offcanvasBottom${i}">Mostrar detalles</button>
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom${i}" aria-labelledby="offcanvasBottomLabel${i}">
      <div class="offcanvas-header">
        <h5 id="offcanvasBottomLabel${i}">${producto.destino}</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        Aerolíneas:<br> <img src="./imag/avioncito.png" width="50px" height="50px">  ${producto.aerolineas.join(", ")}

      </div>
    </div>
    
    <button  id=${producto.id} class="compra">Agregar al carrito</button> 
  `;  
}


let botones = document.getElementsByClassName("compra");
for (const boton of botones){
  boton.addEventListener("click",() =>{
    console.log("hiciste clic en: " + boton.id);
    const prodACarrito = destinosLocales.find((producto) => producto.id == boton.id);
    console.log(prodACarrito);
    agregarACarrito(prodACarrito);
  })
}

function agregarACarrito(prod){
  carro.push(prod);
  cantidad.innerText=`${carro.length}`;
  console.table(carro);
  // alert("EStamos preparando tu viaje a "+prod.destino);
  tablabody.innerHTML += `
    <tr>
    <td>${prod.id}</td>
    <td>${prod.destino}</td>
    <td>${prod.precio}</td>
    </tr>
  `;
  //incrementar el total
  let total = carro.reduce((acumulador,producto) => acumulador + producto.precio, 0);
  document.getElementById("total").innerText = "Total a pagar $: " + total;
  //localStorage
  localStorage.setItem("carrito",JSON.stringify(carro));
}

let finalizarBtn = document.getElementById("finalizar");

finalizarBtn.onclick = () => {
  carro = [];
  document.getElementById("tablabody").innerHTML="";
  cantidad.innerText=`${carro.length}`;
  document.getElementById("total").innerText = "Total a pagar $: ";
  localStorage.removeItem("carrito");
}


let extranjero = document.getElementById ("cardsInternacionales");
for (const producto of destinosInternacionales){
  extranjero.innerHTML += `
  <div class="card" style="width: 18rem;">
  <img src=${producto.foto} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${producto.destino}</h5>
    <p class="card-text">${producto.precio}</p>
    <a href="#" class="btn btn-primary">Ir</a>
  </div>
</div>
  `
}
// const aerolineas = document.getElementById("aerolineas");
// let ver = document.getElementById("disponibilidad");
// ver.onclick = () =>{

// }
