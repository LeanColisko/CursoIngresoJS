/** 
Leandro Colisko
División G

Al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/

function mostrar()
{
	let mesDelAño;
	let mensajeFinal;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño) {
		case "Enero":
			mensajeFinal = "Que comiences bien el año!!!";
			break;
		case "Marzo":
			mensajeFinal = "A clases!";
			break;
		case "Julio":
			mensajeFinal = "Se vienen las vacaciones!!!";
			break;
		case "Diciembre":
			mensajeFinal = "Felices Fiestas !!!";
			break
		default:
			mensajeFinal = "A continuar el año...";
			break;
	}
	alert(mensajeFinal);

}//FIN DE LA FUNCIÓN