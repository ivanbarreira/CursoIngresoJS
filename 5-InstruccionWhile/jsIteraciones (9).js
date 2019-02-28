function mostrar()
{

	var contador;
	var respuesta;
	var numeroMax;
	var numeroMin;
	var numeroIngresado;

	contador=0;
	respuesta='si';
	numeroMax=-9999;
	numeroMin=9999;

	while(respuesta!='no')
	{
		numeroIngresado=prompt("ingrese un numero","escriba aqui");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>numeroMax)
		{
			numeroMax=numeroIngresado;
		}
		if(numeroIngresado<numeroMin)
		{
			numeroMin=numeroIngresado;
		}



		respuesta=prompt("ingrese `no´ para salir","escriba aqui");
	}

	document.getElementById('maximo').value=numeroMax;
	document.getElementById('minimo').value=numeroMin;
}//FIN DE LA FUNCIÓN