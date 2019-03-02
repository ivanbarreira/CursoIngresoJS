function mostrar()
{
	var pais;
	var superficie;
	var respuesta;
	var SupImpares;
	var SupMenores100;
	var SupIguales100;
	var PaisMenor100;
	var contador;
	var sumaKilometros;
	var cantSuperficies;
	var Promedio;
	var superficieMin;
	var paisSuperficieMin;

	respuesta="si";
	SupImpares=0;
	SupMenores100=0;
	SupIguales100=0;
	contador=0;
	sumaKilometros=0;
	cantSuperficies=0;
	


	while(respuesta =="si")
	{
		pais=prompt("Ingrese el nombre del pais","escriba aqui");

		superficie=prompt("Ingrese la superficie de su territorio en numeros","escriba aqui");
		superficie=parseInt(superficie);

		respuesta=prompt("Si ya no desea ingresar datos escriba 'no'","escriba aqui")

		if(superficie%2!=0)
		{
			SupImpares++;
		}



		if(superficie<100)
		{
			SupMenores100++;
		}
		else
		{
			if(superficie>100)
			{
				if(contador==0)
				{
					PaisMenor100=pais;
				}
			}
			
			else
			{
				SupIguales100++;
			}
		}

		sumaKilometros=sumaKilometros+superficie;
		cantSuperficies++;

		
		if (contador==0)
		{
			superficieMin=superficie;
			paisSuperficieMin=pais;
		}
		else
		{
			if(superficie<superficieMin)
			{
				superficieMin=superficie;
				paisSuperficieMin=pais;
			}
		}

		contador++;
	}

	promedio=sumaKilometros/cantSuperficies;

	document.write("La cantidad de países con superficie impar es de "+SupImpares+", la cantidad de países con superficie menor a 100 es "+SupMenores100+", la cantidad de paises con superficie igual a 100 es "+SupIguales100+", el primer país que superó los 100 de superficie es "+PaisMenor100+" el promedio de kilómetros ingresados es "+promedio+" y el que menos territorio tiene es "+paisSuperficieMin);
}
