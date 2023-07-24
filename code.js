const destinos = destinosLocales.concat(destinosInternacionales);

destinosLocales.forEach(destino => {
  destino.aerolineas = destino.aerolineas.join(", ");
});
destinosInternacionales.forEach(destino => {
  destino.aerolineas = destino.aerolineas.join(", ");
});

//filtrado 
  function filtro (precioMax){
    const filtrado = destinos.filter((destino) => destino.precio <= precioMax);
    return filtrado;
 }
  
//autenticacion del usuario 
 for(let i=1;i<=3;i++){
     let usuario = prompt("Ingrese el nombre del usuario:"); 
     let clave = prompt("Ingrese la contraseña:");
     if(usuario=="Agustin" || usuario == "agustin" && clave=="1234"){
         alert("Bienvenido " + usuario);
         break;
     }else{
         alert("Usuario y/contraseña incorrectos. Por favor,inténtalo de nuevo");
     }
 }
//Ingreso de fechas
let fechaIda = prompt("Ingrese una fecha de viaje (dd/mm/aaaa): ");
console.log("Fecha de viaje: " + fechaIda);
let fechaRegreso = prompt("Ingrese la fecha de regreso (dd/mm/aaaa): ");
console.log("Fecha de regreso: " + fechaRegreso);

// funcion find
const nombreBuscado = prompt("Ingrese el nombre del destino que desea buscar:");
 const encontrado = destinos.find(destino => destino.destino.toLowerCase() === nombreBuscado.toLowerCase());

if (encontrado) {
  console.log("Destino encontrado:");
  console.table(encontrado);
} else {
  console.log("Destino no encontrado. Verifique el nombre e intente nuevamente.");
}
//ingreso de datos para llevar a cabo el filtro (linea 11)
let inputFiltro = parseFloat(prompt("Ingrese un precio maximo (0-para salir)"));
 while(inputFiltro != 0 ){
   if(isNaN(inputFiltro) || inputFiltro < 0){
     alert("Numero inválido. Intente nuevamente");
   }else{
     let inputFiltrado = filtro (inputFiltro);
     console.table(inputFiltrado);
   }
   inputFiltro = parseFloat(prompt("Ingrese un precio maximo (0-para salir)"));
 }
// Menú principal
 let opcion = prompt("Seleccione una opcion:\n1-Vuelos\n 2-Alojamiento\n 3-Paquetes\n 4-Ofertas \n 0-exit");
 
 let descuento =0.7;
 while(opcion != 0){
     switch(opcion){
         case "1":
             alert("Mostrando resultado de vuelos disponibles");
             let vuelo=prompt("Seleccione un destino:\n a-Nacional\n b-Internacional");
             if (vuelo == "a"){
                 alert("Mostrando los destinos nacionales");
                 console.table(destinosLocales);
             }else{
                 alert("Mostrando los destinos alrededor del mundo");
                 alert("Destinos mas elegidos:");
                 console.table(destinosInternacionales);
                 
             }
             break;
         case "2":
             alert("Mostrando resultados de alojamientos disponibles");
             alert("1-Hotel\n2-Resorts\n3-Apartamento\n4-Casas");
             break;
         case "3":
             alert("Mostrando resultado de paquetes turisticos disponibles");
             break;
         case "4":
             alert("Mostrando las mejores ofertas");
             alert("Destinos nacionales 30% OFF");
            
             descontar("Cataratas del Iguazu $" , 55000*descuento);
             descontar("Jujuy $", 50000*descuento);
             descontar("Mendoza $", 40000*descuento);
             descontar("Buenos Aires $", 30000*descuento);
             descontar("Bariloche $", 80000*descuento);
             descontar("San Martin de los Andes $",88000*descuento);
             descontar("Ushuaia $", 105000*descuento);
             break;
         default:
             alert("La opcion que elegiste no existe");
             break;
     }
     opcion = prompt("Seleccione una opcion:\n1-Vuelos\n 2-Alojamiento\n 3-Paquetes\n 4-Ofertas \n 0-exit");   
 }
 function descontar(localidad,precio){
     alert(localidad + precio);
 }

 