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
let ida = prompt("Fecha de ida");
let vuelta = prompt("Fecha de regreso");
let opcion = prompt("Seleccione una opcion:\n1-Vuelos\n 2-Alojamiento\n 3-Paquetes\n 4-Ofertas \n 0-exit");
let descuento =0.7;
while(opcion != 0){
    switch(opcion){
        case "1":
            alert("Mostrando resultado de vuelos disponibles");
            let destino=prompt("Seleccione un destino:\n a-Nacional\n b-Internacional");
            if (destino == "a"){
                alert("Mostrando los destinos nacionales");
                alert("Cataratas del Iguazú $55.000\nJujuy $50.000\nMendoza $40.000\nBuenos Aires $30.000\nBariloche $80.000\nSan Martin de los Andes $88.000\nUshuaia $105.000\nTermas de Rio Hondo $25.000");
            }else{
                alert("Mostrando los destinos alrededor del mundo");
                alert("Africa\nAmerica\nAsia\nEuropa\nOceania")
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
            
            descontar("Cataratas del Iguazu $" , 80000*descuento);
            descontar("Jujuy $", 50000*descuento);
            descontar("Mendoza $", 40000*descuento);
            descontar("Buenos Aires $", 30000*descuento);
            descontar("Bariloche $", 80000*descuento);
            descontar("San Martin de los Andes $",88000*descuento);
            descontar("Ushuaia $", 105000*descuento);
            descontar("Termas de Rio Hondo $",25000*descuento)

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