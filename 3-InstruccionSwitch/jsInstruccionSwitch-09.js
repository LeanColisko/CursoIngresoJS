/*
Leandro Colisko
División G
Una agencia de viajes debe sacar las tarifas de los viajes ,
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final

En Invierno: 
Bariloche tiene un aumento del 20% 
Cataratas y  Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

En Verano: 
Bariloche tiene un descuento del 20% 
Cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

En Otoño y Primavera: 
Bariloche tiene un aumento del 10% 
Cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	let estacionIngresada;
	let detinoIngresado;
	let correccionPrecioPorEstacion;
	let precioPorEstadia;
	let precioFinal;
	let mensajeFinal;

	precioPorEstadia = 15000;
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	detinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(detinoIngresado){
		case "Bariloche":
			switch(estacionIngresada){
				case "Invierno":
					correccionPrecioPorEstacion = 1.2;
					break;
				case "Verano":
					correccionPrecioPorEstacion =  0.9;
					break;
				default:
					correccionPrecioPorEstacion = 1.1;
					break;
			}
			break;
		case "Cataratas":
			switch(estacionIngresada){
				case "Invierno":
					correccionPrecioPorEstacion = 0.9;
					break;
				default:
					correccionPrecioPorEstacion = 1.1;
					break;
			}
			break;
		case "Cordoba":
			switch(estacionIngresada){
				case "Invierno":
					correccionPrecioPorEstacion = 0.9;
					break;
				case "Verano":
					correccionPrecioPorEstacion =  0.9;
					break;
				default:
					correccionPrecioPorEstacion = 1;
					break;
			}
			break;
		case "Mar del plata":
			switch(estacionIngresada){
				case "Invierno":
					correccionPrecioPorEstacion = 0.8;
					break;
				case "Verano":
					correccionPrecioPorEstacion =  1.2;
					break;
				default:
					correccionPrecioPorEstacion = 1.1;
					break;
			}
			break;
	}
	
	precioFinal = precioPorEstadia * correccionPrecioPorEstacion;
	mensajeFinal = "El precio final a pagar es " + precioFinal;
	alert(mensajeFinal);

}//FIN DE LA FUNCIÓN