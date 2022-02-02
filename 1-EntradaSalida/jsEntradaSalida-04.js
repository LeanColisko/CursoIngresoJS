/*
Leandro Colisko
División G

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;
	nombreIngresado = prompt("Por favor, ingrese su nombre: ");
	document.getElementById("txtIdNombre").value = nombreIngresado;
}

