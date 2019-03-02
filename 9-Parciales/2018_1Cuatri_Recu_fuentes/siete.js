function mostrar()
{
	var velocidad;
	var TipoDeCombustible;
	var contadorvelocidad;
	var contadorCombustible;
	var vehiculos;
	var Promediovelocidad;
	var sumavelocidad;
	var velocidadMin;
	var velocidadMax;
	var TipoDeCombustibleMin;

	contadorvelocidad = 0;
	contadorCombustible = 0;
	vehiculos = 0;
	sumavelocidad = 0;
	velocidadMin = 0;
 

	while (vehiculos<5)
	{
		velocidad = prompt ("Ingrese la velocidad en kilometros","esciba entre 0 y 250");
		velocidad = parseInt(velocidad);

		while(velocidad<0 || velocidad>250)
		{	
			velocidad = prompt ("esciba solo entre 0 y 250");
			velocidad=parseInt(velocidad);

			++contadorvelocidad;

			if(contadorvelocidad==2)
			{
				break;
			}
		}



		TipoDeCombustible = prompt("Ingrese el tipo de combustible","escriba `s´ o `l´");

		while(TipoDeCombustible != "s" && TipoDeCombustible != "l")
		{
			TipoDeCombustible = prompt("escriba solo `s´ o `l´");

			++contadorCombustible;
			
			if(contadorCombustible==2)
			{	
				break;
			}
		}


		sumavelocidad=sumavelocidad+velocidad;


		if(vehiculos==0)
		{
			velocidadMin=velocidad;
			velocidadMax=velocidad;
		}

		if(velocidad<velocidadMin)
		{
			velocidadMin=velocidad;
			TipoDeCombustibleMin=TipoDeCombustible;
		}



		switch (TipoDeCombustible)
		{
			case  "l":
				if (velocidad>100)
				{
					contadorCombustible++;
				}
			break;

			case "s":

				if(velocidad>velocidadMax)
				{
					velocidadMax=velocidad;
				}
			break;
		}
		

		vehiculos++;
	}


	Promediovelocidad=sumavelocidad/vehiculos;


	alert("El promedio total es de las velocidades es "+Promediovelocidad+" kilometros , la velocidad mas baja es "+velocidadMin+" kilometros y su tipo de comustible es "+TipoDeCombustibleMin+", la cantidad de combustible liquido que su velocidad supere los 100 kilometros es de "+contadorCombustible+" y la valocidad mas alta de los vehiculos con combustible solido es "+velocidadMax+" kilometros");



	/*console.log("promedio "+ Promediovelocidad);
	console.log("velocidad minima: "+velocidadMin);
	console.log("cuantos mayor a 100 " + contadorCombustible);
	*/
}
