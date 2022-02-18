
/**

Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4
 */

function mostrar()
{
	let numeroAleatorio;
	let max;
	let min;
	let mensaje;
	max = 10;
	min = 1;

	numeroAleatorio =  Math.random() * (max-min) + min
	numeroAleatorio = Math.floor(numeroAleatorio)
	
	if (numeroAleatorio > 8 ) {
		mensaje = "EXCELENTE"
	} else {
		if (numeroAleatorio > 4) {
			mensaje = "APROBÓ"
		} else {
			mensaje = "Vamos, la próxima se podrá"
		}
	}
	mensaje += " Nota: " + numeroAleatorio
	alert(mensaje);

}//FIN DE LA FUNCIÓN