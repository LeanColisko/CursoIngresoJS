/*
Leandro Colisko
División G

Al ingresar una edad debemos informar si la persona 
es mayor de edad (mas de 18 años) o adolescente 
(entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	//tomo la edad  
	if (edad > 17) {
		alert("Usted es mayor de edad");
	} else {
		if (edad < 13) {
			alert("Usted es un niño menor de 13 años");
		} else {
			alert("Usted es un adolescente");
		}
	}
	
}//FIN DE LA FUNCIÓN