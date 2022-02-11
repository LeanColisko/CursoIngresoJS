/*
Leandro Colisko
División G

Al ingresar una edad debemos informar 
solo si la persona es mayor de edad
*/

function mostrar()
{
	let edad;
	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	if (edad > 17) {
		alert("Usted es mayor de edad.");
	}

}//FIN DE LA FUNCIÓN