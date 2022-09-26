
var expre= "Manzandas";
var p= "naranjas"
var n12= 100;
var n13= 50;
var n14= 10;
var n15= 5;
var n16= 10;
var n17= 5;
var mascota= "pedro";
var coches= 1;
var n18= 4;
var n19= 400;
var calificaciones= 2;
var n20= 30;
var n21=50;


if(n12 < n13){

switch (expre) {
    case 'Naranjas':
      console.log('El kilogramo de naranjas cuesta $0.59.');
      break;
    case 'Manzanas':
      console.log('El kilogramo de manzanas cuesta $0.32.');
      break;
    case 'Platanos':
      console.log('El kilogramo de platanos cuesta $0.48.');
      break;
    case 'Cerezas':
      console.log('El kilogramo de cerezas cuesta $3.00.');
      break;
    case 'Mangos':
    case 'Papayas':
      console.log('El kilogramo de mangos y papayas cuesta $2.79.');
      break;
  }
}else{
  console.log("no existe ese producto")
  
}
  
if(n14 > n15){

  switch (p) {
      case 'naranjas':
        console.log('El kilogramo de naranjas cuesta $0.59.');
        break;
      case 'Manzanas':
        console.log('El kilogramo de manzanas cuesta $0.32.');
        break;
      case 'Platanos':
        console.log('El kilogramo de platanos cuesta $0.48.');
        break;
      case 'Cerezas':
        console.log('El kilogramo de cerezas cuesta $3.00.');
        break;
      case 'Mangos':
      case 'Papayas':
        console.log('El kilogramo de mangos y papayas cuesta $2.79.');
        break;
    }
  }else{
    console.log("no existe ese producto")
    
  }

  if (n16 >n17){
    switch(mascota)
    {
       
       case 'pedro' :
          console.log("pedro es un perro chico")
          break; 
       
       case 'fito':
        console.log("fito esta bien")
          break; 
          case 'firulais':
        console.log("es un perro color blanco")
          break;    
    }
  }else{

    console.log("tu mascota no existe")
  }

  if (n18 < n19){
    switch(coches)
    {
       
       case 1 :
          console.log("ganaste un coche rojo")
          break; 
       
       case 2:
        console.log("ganaste un coche azul")
          break; 
          case 3:
        console.log("no ganaste nada :c")
          break;    
    }
  }else{

    console.log("tu numero no existe")
  }

  if (n20 < n21){
    switch(calificaciones)
    {
       
       case 1 :
          console.log("tu calicacion es 1 es reprobatoria")
          break; 
       
       case 2:
        console.log("tu calicacion es 2 es reprobatoria")
          break; 
          case 3:
        console.log("tu calicacion es 10 aprobaste")
          break;    
    }
  }else{

    console.log("No entregaste nada :c")
  }
