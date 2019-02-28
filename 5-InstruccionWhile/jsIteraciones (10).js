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
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	respuesta="si";
	cantidadPositivos=0;
	cantidadNegativos=0;
	cantidadCeros=0;
	cantidadPares=0;
	sumaPositivos=0;
	sumaNegativos=0;



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
		if(numeroIngresado%2==0)
		{
			cantidadPares++;
		}


		respuesta=prompt("ingrese `no´ para salir","escriba aqui");	
	}
	
	promedioPositivos=sumaPositivos/cantidadPositivos;
	promedioNegativos=sumaNegativos/cantidadNegativos;
	diferencia=sumaPositivos-sumaNegativos;


	console.log("suma de los positivos " + sumaPositivos);
	console.log("suma de los negativos " + sumaNegativos);
	console.log("cantidad de positivos " + cantidadPositivos);
	console.log("cantidad de negativos " + cantidadNegativos);
	console.log("cantidad de ceros " + cantidadCeros);
	console.log("cantidad de numeros pares " + cantidadPares);
	console.log("promedio de los positivos " + promedioPositivos);
	console.log("promedio de los negativos " + promedioNegativos);
	console.log("la diferencia entre los positivos y los negativos es " + diferencia);
}//FIN DE LA FUNCIÓNNumero