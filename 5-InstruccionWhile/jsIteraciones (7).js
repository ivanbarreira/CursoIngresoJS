function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var numero;

	contador=0;
	acumulador=0;
	respuesta=prompt("Si desea ingresar un numero escriba la palabra:`si´, de lo contrario escriba:`no´","escriba aqui");


	while(respuesta=="si" && respuesta!="no")
	{
		numero=prompt("Ingrese un numero","escriba aqui");
		numero=parseInt(numero);

		respuesta=prompt("Si desea ingresar otro numero escriba la palabra:`si´, de lo contrario escriba:`no´","escriba aqui");
		
		acumulador=acumulador+numero;

		++contador;
	}

	document.getElementById('suma').value=acumulador;

	if(acumulador==0 && contador==0)
	{
		document.getElementById('promedio').value=0;
	}
	else
	{
		document.getElementById('promedio').value=acumulador/contador;
	}

}//FIN DE LA FUNCIÓN