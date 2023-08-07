let destinosLocales = [
    {
      id: "a",
      destino: "Cataratas del Iguazú",
      aerolineas: ["Aerolíneas Argentinas", "LATAM", "Flybondi","GOL"],
      foto: "./imag/158835.webp",
      precio: 55000
    },
    {
      id:"b",
      destino: "San Carlos de Bariloche",
      aerolineas: ["Aerolineas Argentinas", "Avianca", "JetSMART"],
      foto: "./imag/Bariloche-postada.jpg",
      precio: 80000
    },
    {
      id:"c",
      destino: "Jujuy",
      aerolineas: ["GOL", "Aerolíneas Argentinas", "Austral"],
      foto: "./imag/jujuy.jpg",
      precio: 50000
    },
    {
      id:"d",
      destino: "Mendoza",
      aerolineas: ["Aerolíneas Argentinas", "LATAM", "Flybondi", "JetSMART"],
      foto: "./imag/mendoza.jpg",
      precio: 40000
    },
    {
      id:"e",
      destino: "Ushuaia",
      aerolineas: ["Austral, Aerolineas Argentinas, Andes, LATAM"],
      foto:"./imag/ushuaia.jpg",
      precio: 105000
    },
    {
      id:"f",
      destino: "Buenos Aires",
      aerolineas: ["Austral","Avianca","Aerolineas Argentinas", "Flybondi"],
      foto: "./imag/obelisco_buenos-aires-1.jpg",
      precio: 30000
    }
  ];

  console.log(destinosLocales);
  class Nacional{
    constructor (destino,aerolineas,foto,precio){
      this.destino = destino;
      this.aerolineas = aerolineas;
      this.foto = foto;
      this.precio = precio;
    }
  }
  const vuelo = new Nacional ("Rosario","GOL,Aerolineas Argentinas","https://www.google.com/search?q=rosario+ciudad&tbm=isch&ved=2ahUKEwjdm5zDl8eAAxVQLLkGHVeQBzQQ2-cCegQIABAA&oq=rosario+ciu&gs_lcp=CgNpbWcQARgAMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECCMQJzoKCAAQigUQsQMQQzoHCAAQigUQQzoICAAQgAQQsQM6BAgAEANQkARYgghg-Q5oAHAAeACAAfUBiAHPBJIBBTQuMC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=5B_PZN2ZKdDY5OUP16CeoAM&bih=651&biw=1366&rlz=1C1GCEA_enAR982AR982#imgrc=NXBIMG26SrlbQM","15000");
  console.log(vuelo);