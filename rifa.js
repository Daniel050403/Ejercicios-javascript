var ganado=new Array();
var n= prompt("Introduce un numero de participantes");
for(var i=1;i<=n;i++)
{
    var nombre = prompt("Introduce nombre");
    ganado.push(nombre);
}

var ganador =  ganado[Math.floor(Math.random()*ganado.length)]

document.write("el ganador es"+ganador);