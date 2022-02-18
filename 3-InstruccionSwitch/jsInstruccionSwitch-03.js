/*
Leandro Colisko
División G

Al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"

*/
function mostrar()
{
	let mesDelAño;
	let mensajeFinal;

	mesDelAño = document.getElementById("txtIdMes").value;
	
	switch(mesDelAño){
		case "Febrero": 
			mensajeFinal = "Este mes no tiene más de 29 días";
			break;
		default:
			mensajeFinal = "Este mes tiene 30 o más días";
			break;
	}
	alert(mensajeFinal)
	
}//FIN DE LA FUNCIÓN