var palabra = prompt("ingresa palabara")
var alreves = palabra.split("");



        var a = e = i = o = u = blancos = 0;
        vectorLetras = consultarTexto();
        
        function consultarTexto(){
            
            var textoRoto = palabra.toLowerCase().split("");
            return textoRoto;
        }        
        
        for(k=0;k < vectorLetras.length;k++){
            
            switch(vectorLetras[k]){
                case "a":
              
                    a++;
                    break;
                case "e":
              
                    e++;
                    break;
                case "i":
             
                    i++;
                    break;
                case "o":
                
                    o++;
                    break;
                case "u":
                
                    u++;
                   
            }
        }
        
        totalVocales = a+e+i+o+u;
        
        console.log("Hay " +  a + " vocales a");
        console.log("Hay " +  e + " vocales e");
        console.log("Hay " +  i + " vocales i");
        console.log("Hay " +  o + " vocales o");
        console.log("Hay " +  u + " vocales u");

    
        console.log("palabra volteada:"+"     "+"   " + alreves.reverse().join(""));
      
  