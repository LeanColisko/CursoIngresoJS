/*
Leandro Coliko
División G

Al presionar el botón pedir la CLAVE 
(ayuda: es utn750)
*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	
	while(claveIngresada != "utn750"){
		claveIngresada = prompt("La clave es incorrecta, intente otra vez ... ");
	}

}//FIN DE LA FUNCIÓN
