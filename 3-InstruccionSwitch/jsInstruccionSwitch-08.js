/*
Leandro Colisko
División G
Al seleccionar un destino informar si 
hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	let destinoIngresado;
	let temperatura;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado){
		case "Bariloche":
		case "Ushuaia":
			temperatura = "Hace frio";
			break;
		default:
			temperatura = "Hace calor";	
			break;
	}
	alert(temperatura);

}//FIN DE LA FUNCIÓN