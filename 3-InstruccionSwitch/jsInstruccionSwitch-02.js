/**
Leandro Colisko
División G
Al seleccionar un mes informar.
si estamos en Invierno: : "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
 
*/
function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensajeFinal;
	mesDelAño = document.getElementById("txtIdMes").value;
	
	switch(mesDelAño){
		case "Julio": 
		case "Agosto":
			mensajeFinal = "Abrigate hace mucho frio";
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensajeFinal = "Ya pasamos el frio, ahora calor!!!";
			break;
		default:
			mensajeFinal = "Falta para el invierno";
			break;
	}
	alert(mensajeFinal)

}//FIN DE LA FUNCIÓN