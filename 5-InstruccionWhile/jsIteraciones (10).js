function mostrar()
{
/*
-2 -5 3 8 0
*/
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var cantidadNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadCeros;

	respuesta="si";
	cantidadPositivos=0;
	cantidadNegativos=0;
	cantidadCeros=0;

	while(respuesta!="no")
	{
		numeroIngresado=prompt("ingrese un numero","escriba aqui");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado<0)
		{
			sumaNegativos=sumaNegativos+numeroIngresado;
			cantidadNegativos++;
		}
		else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos=sumaPositivos+numeroIngresado;
				cantidadPositivos++;
			}
			else
			{
				cantidadCeros++;
			}
		}

		respuesta=prompt("ingrese `no´ para salir","escriba aqui");	
	}
	console.log("suma de los positivos " + sumaPositivos);
	console.log("suma de los negativos " + sumaNegativos);
}//FIN DE LA FUNCIÓN