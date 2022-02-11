/*
Leandro Colisko
División G

3.	Para el departamento de Pinturas:

A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en 
    Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en 
    Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let centigrados;
    let farenheit;
    let mensaje;

	farenheit = document.getElementById("txtIdTemperatura").value;
    farenheit = parseInt(farenheit);
    
    centigrados = ((farenheit - 32) * 5) / 9;
    mensaje =  farenheit + " Farenheit son " + centigrados + " Centígrados";
    
    alert(mensaje);
}


function CentigradosFahrenheit () 
{
    let centigrados;
    let farenheit;
    let mensaje;

	centigrados = document.getElementById("txtIdTemperatura").value;
    centigrados = parseInt(centigrados);
    
    farenheit = (centigrados * 1.8) + 32;
    farenheit = parseInt(farenheit);

    mensaje =  centigrados + " Centigrados son " + farenheit + " Farenheit";
    
    alert(mensaje);
}
