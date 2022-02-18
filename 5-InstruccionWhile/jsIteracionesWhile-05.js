/*
Leandro Colisko
División G

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "m" && sexoIngresado != "f") {
		sexoIngresado = prompt("Error ingrese f ó m .");
	}

	txtIdSexo.value = sexoIngresado;

}//FIN DE LA FUNCIÓN