/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var Sueldo;
	var Aumento;
	var Resultado;

	Sueldo=sueldo.value;

	Sueldo=parseInt(Sueldo);

	Aumento=Sueldo*0.1;

	Resultado=Sueldo+Aumento;

	resultado.value=Resultado;
}
