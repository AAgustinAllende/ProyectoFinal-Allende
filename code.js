//proceso de LogIn
let user = document.getElementById("campoUser");
let logIn = document.getElementById("log-in");
const ingreso = document.getElementById("username");
const registro = document.getElementById("pass");
let cambio = document.getElementById("hola");
let google = document.getElementById("continue");


function autenticar() {
  let usuario = ingreso.value;
  let clave = registro.value;
  
  if (usuario == "Agustin" || usuario == "agustin" && clave == "1234") {
    console.log("Bienvenido " + usuario);
    cambio.innerText = "Agustin Allende";
    user.innerHTML = `
      <button type="button" class="btn btn-light">Mis puntos</button>
      <button type="button" class="btn btn-light">Mis viajes</button>
    `;
    logIn.innerText = "Salir";
    google.innerText = "Mi perfil";
  } else {
    alert("Datos incorrectos");
  }
}

function cerrarSesion() {
  // rever
}

function entrarPorGoogle() {
  cambio.innerText = "Agustin Allende";
  user.innerHTML = `
    <button type="button" class="btn btn-light">Mis puntos</button>
    <button type="button" class="btn btn-light">Mis viajes</button>
  `;
  logIn.innerText = "Salir";
  google.innerText = "Mi perfil";
  localStorage.setItem("usuario", "Agustin Allende");
}

logIn.onclick = autenticar;
google.onclick = entrarPorGoogle;


let carro=JSON.parse(localStorage.getItem("carrito")) || [];
let cantidad = document.getElementById("cantidad");
cantidad.innerText=`${carro.length}`;


if(carro.length != 0){
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
  <div class="card nacional" style="width: 25rem";>
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
    
    <button  id=${producto.id} class="compra btn btn-primary">Agregar al carrito</button> 
  `;  
}
let extranjero = document.getElementById ("cardsInternacionales");
for (let i = 0; i < destinosInternacionales.length; i++) {
  let prods = destinosInternacionales[i];
  extranjero.innerHTML += `
  <div class="card internacional" style="width: 25rem;">
  <img src=${prods.foto} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${prods.destino}</h5>
    <p class="card-text">${prods.precio}</p>
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottomInternacional${i}" aria-controls="offcanvasBottomInternacional${i}">Mostrar detalles</button>
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottomInternacional${i}" aria-labelledby="offcanvasBottomLabelInternacional${i}">
      <div class="offcanvas-header">
        <h5 id="offcanvasBottomLabel${i}">${prods.destino}</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        Aerolíneas:<br> <img src="./imag/avioncito.png" width="50px" height="50px">  ${prods.aerolineas.join(", ")}

      </div>
    </div>
    
    <button  id=${prods.id} class="compra btn btn-primary">Agregar al carrito</button> 
  `;  
}



function mostrarPaquetes(inputDestino){
  switch (inputDestino){
    case "Bariloche":
      console.table(paquetesBariloche);
      for(const paquetes of paquetesBariloche){
        packsResults.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src=${paquetes.imagen} class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${paquetes.nombre}</h5>
              <p class="card-text">${paquetes.descripcion}</p>
              <h5>${paquetes.precio}</h5>
              <p class="card-text"><small class="text-body-secondary">${paquetes.duracion}</small></p>
              <button  data-id=${paquetes.id} class="compra btn btn-primary">Agregar al carrito</button>

            </div>
          </div>
        </div>
      </div>
     `
      };
      break;
    case "Mendoza":
      console.table(packagesMendoza);
      for(const packs of packagesMendoza){
        packsResults.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src=${packs.imagen} class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${packs.nombre}</h5>
              <p class="card-text">${packs.descripcion}</p>
              <h5>${packs.precio}</h5>
              <p class="card-text"><small class="text-body-secondary">${packs.duracion}</small></p>
              <button  id=${packs.id} class="compra btn btn-primary">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
        `
      };
      break;
    case "Buenos Aires":
      console.table(paquetesBuenosAires);
      for(const paquetes of paquetesBuenosAires){
        packsResults.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src=${paquetes.imagen} class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${paquetes.nombre}</h5>
              <p class="card-text">${paquetes.descripcion}</p>
              <h5>${paquetes.precio}</h5>
              <p class="card-text"><small class="text-body-secondary">${paquetes.duracion}</small></p>
              <button  id="pack_${paquetes.id}" class="compra btn btn-primary">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
        `
      };
      break;
    case "Ushuaia":
      console.table(paquetesTierraDelFuego);
      for(const paquetes of paquetesTierraDelFuego){
        packsResults.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${paquetes.nombre}</h5>
              <p class="card-text">${paquetes.descripcion}</p>
              <p class="card-text"><small class="text-body-secondary">${paquetes.duracion}</small></p>
            </div>
          </div>
        </div>
      </div>
        `
      };
      break;
    case "Jujuy":
      console.table(paquetesJujuy);
      for(const paquetes of paquetesJujuy){
        packsResults.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${paquetes.nombre}</h5>
              <p class="card-text">${paquetes.descripcion}</p>
              <p class="card-text"><small class="text-body-secondary">${paquetes.duracion}</small></p>
            </div>
          </div>
        </div>
      </div>
        `
      };
      break;
    case "Cataratas del Iguazu":
      console.table(paquetesIguazu);
      for(const paquetes of paquetesIguazu){
        packsResults.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${paquetes.nombre}</h5>
              <p class="card-text">${paquetes.descripcion}</p>
              <p class="card-text"><small class="text-body-secondary">${paquetes.duracion}</small></p>
            </div>
          </div>
        </div>
      </div>
        `
      };
      break;
    default:
      console.log("No encontramos paquetes para el destino elegido");
  }

}

let botones = document.getElementsByClassName("compra");
for (const boton of botones){
  boton.addEventListener("click",() =>{
    console.log("hiciste clic en: " + boton.id);
    const prodACarrito = destinosLocales.find((producto) => producto.id == boton.id);
    const prodInternacionalACarrito = destinosInternacionales.find((producto) => producto.id == boton.id);
    const seleccionMendoza = packagesMendoza.find((producto) => producto.id == boton.id);
    if(prodACarrito){
      agregarACarrito(prodACarrito);
    }else if (prodInternacionalACarrito){
      agregarACarrito(prodInternacionalACarrito);
    }
  })
}



function agregarACarrito(prod){
  carro.push(prod);
  cantidad.innerText=`${carro.length}`;
  console.table(carro);
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

//acceso a la busqueda con los diferentes inputs
let fechaIda = document.getElementById("inputFechaIda");
let fechaVuelta = document.getElementById("inputFechaVuelta");
let destinoInput = document.getElementById("b");
const btnBuscar = document.getElementById("btnBuscar");
let packsResults = document.getElementById("resultados");

btnBuscar.onclick = () => {
  let valorFechaIda = fechaIda.value;
  let valorFechaVuelta = fechaVuelta.value;
  let valorDestino = destinoInput.value
  
let idaDate = new Date(valorFechaIda);
let vueltaDate = new Date (valorFechaVuelta);

let ida = idaDate.toLocaleDateString();
let vuelta = vueltaDate.toLocaleDateString();

let milisegundos = vueltaDate - idaDate;
let cantDays = milisegundos / 86400000;

console.log("Fecha de viaje: " + ida);
console.log("Fecha de regreso:  " + vuelta);
console.log("Destino:  " + valorDestino);
console.log("cantidad de dias: " + cantDays);

mostrarPaquetes(valorDestino);



};

//get
function obtenerAlojamientos(){
  const MIJSON = "/alojamientos.json";
  fetch(MIJSON)
  .then((resultado) => resultado.json())
  .then((data) => {
    console.log(data);
    const listaAlojamientos = data.Bariloche
    console.log(listaAlojamientos);
    listaAlojamientos.forEach(alojamiento => {
      document.getElementById("resultadosAlojamientos").innerHTML += `
      <h2>${alojamiento.nombre}</h2>
      `
      
    });
  })
}

obtenerAlojamientos();


