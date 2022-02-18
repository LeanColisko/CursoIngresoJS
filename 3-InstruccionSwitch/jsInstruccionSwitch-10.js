/*
Leandro Colisko
División G
Una agencia de viajes nos piden informar si hacemos 
viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar

En Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

En Verano: Se viaja a Mar del plata y Cataratas solamente

En Otoño: Se viaja a todos los destinos.

En primevera: primavera: solo no se viaja a Bariloche
 */

function mostrar()
{
	let estacionIngresada;
	let detinoIngresado;
	let mensajeFinal;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	detinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(estacionIngresada){
		case "Invierno":
			switch(detinoIngresado){
				case "Bariloche":
					mensajeFinal = "Se viaja";
					break;
				default:
					mensajeFinal = "No se viaja";
					break
			}
			break;
		case "Verano":
			switch(detinoIngresado){
				case "Mar del plata":
				case "Cataratas":
					mensajeFinal = "Se viaja";
					break;
				default:
					mensajeFinal = "No se viaja";
					break;
			}
			break;
		case "Primavera":
			switch(detinoIngresado){
				case "Bariloche":
					mensajeFinal = "Se viaja";
					break;
				default:
					mensajeFinal = "No se viaja";
			}
			break;
		default:
			mensajeFinal = "Se viaja";
			break;
	}
	alert(mensajeFinal);

}//FIN DE LA FUNCIÓN