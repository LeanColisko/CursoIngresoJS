
/*
Leandro Colisko
División G

Mostrar un número random del 1 al 10 inclusive.
*/


function mostrar()
{
	let numeroAleatorio;
	let max;
	let min;
	max = 10;
	min = 1;

	numeroAleatorio =  Math.random() * (max-min) + min
	numeroAleatorio = Math.floor(numeroAleatorio)
	//Genero el número RANDOM entre 1 y 10 
	alert(numeroAleatorio);	

}//FIN DE LA FUNCIÓN