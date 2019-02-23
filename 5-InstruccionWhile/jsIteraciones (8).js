function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;
	var positivo;
	var negativo;

	contador=0;
	acumulador=0;
	respuesta=prompt("Si desea ingresar un numero escriba la palabra:`si´, de lo contrario escriba:`no´","escriba aqui");
	positivo=0;
	negativo=1;

	while(respuesta=="si" && respuesta!="no")
	{
		numero=prompt("Ingrese un numero","escriba aqui");
		numero=parseInt(numero);

		if(numero<0)
		{
			negativo=negativo*numero;
		}	
		else
		{
			positivo=positivo+numero;
		}
		



		respuesta=prompt("Si desea ingresar otro numero escriba la palabra:`si´, de lo contrario escriba:`no´","escriba aqui");
		
		acumulador=acumulador+numero;

		++contador;
	}

	document.getElementById('suma').value=positivo;
	if(numero==0)
	{
		document.getElementById('producto').value=numero;
	}
	else
	{
		if(numero>0)
		{
			document.getElementById('producto').value="No hay numeros negativos"
		}
		else
		{
			document.getElementById('producto').value=negativo;
		}
	}
}//FIN DE LA FUNCIÓN