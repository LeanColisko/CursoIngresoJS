/*
Leandro Colisko
División G

Al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensajeFinal;
	mesDelAño = document.getElementById("txtIdMes").value;
	
	switch(mesDelAño){
		case "Febrero": 
			mensajeFinal = "Si tiene 28 días";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensajeFinal = "Si tiene 30 días";
			break;
		default:
			mensajeFinal = "Si tiene 31 días";
			break;
	}
	alert(mensajeFinal)

}//FIN DE LA FUNCIÓN