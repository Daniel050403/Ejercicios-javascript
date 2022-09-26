

var v = prompt("Ingrese un numero");


function contarvocales(texto){
    let contarvocales=0;
    let vocales =["a","e","i","o","u","A","E","I","O","U"];
    
for (let index = 0; index < texto.length; index++) {
    if(vocales.indexOf(texto[index]) >=0) {
       ++contarvocales;
    }
    
     
    
    
}
return contarvocales;

}

console.log(contarvocales(v));