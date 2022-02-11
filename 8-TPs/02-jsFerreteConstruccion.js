/*
Leandro Colisko 
División G

2.	Para el departamento de Construcción:

A.	Mostrar la cantidad de alambre a comprar 
    si se ingresara el largo y el ancho de un 
    terreno rectangular y se debe alambra con 
    tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar 
    si se ingresara el radio  de un terreno circular y
    se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 
    2 bolsas de cemento y 3 de cal, debemos mostrar 
    cuantas bolsas se necesitan de cada uno para las 
    medidas que nos ingresen.

*/

function Rectangulo () 
{   
    let largoTerreno;
    let anchoTerreno;
    let perimetro;
    let cantidadAlambreCompar;
    let cantidadHilos;
    let mensaje;

    cantidadHilos = 3;
    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseInt(largoTerreno) * 2;
    anchoTerreno = parseInt(anchoTerreno) * 2;
    perimetro = (largoTerreno + anchoTerreno);
    cantidadAlambreCompar = perimetro * cantidadHilos;
    mensaje = "La cantidad de alambre a comprar es: " + cantidadAlambreCompar;
    alert(mensaje);
}

function Circulo () 
{
    let radio;
    let perimetro;
    let mensaje;
    let cantidadAlambreCompar;
    let cantidadHilos;

    cantidadHilos = 3;
    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);

    perimetro = radio * 2 * Math.PI;
    cantidadAlambreCompar = cantidadHilos * perimetro;
    mensaje = "La cantidad de alambre a comprar es " + cantidadAlambreCompar;

    alert(mensaje)
}

function Materiales () 
{

    let largoTerreno;
    let anchoTerreno;
    let area;
    let cemento;
    let cal;
    let mensaje;

    cemento = 2;
    cal = 3;
    
    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    area = largoTerreno * anchoTerreno;

    cemento = area * cemento;
    cal = area * cal;

    mensaje = "Bolsas de cal: " + cal + " bolsas de cemento: " + cemento;
    
    alert(mensaje);
}


