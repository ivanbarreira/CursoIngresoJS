function mostrar()
{
	var importe1;
	var importe2;
	var importe3;
	var importe4;
	var ImporteTotal;
	var Porcentaje;
	var ImporteModificado;
	var ImporteMayor;

	importe1=prompt("Ingrese el primer importe","escriba aqui");
	importe2=prompt("Ingrese el segundo importe","escriba aqui");
	importe3=prompt("Ingrese el tercer importe","escriba aqui");
	importe4=prompt("Ingrese el tercer importe","escriba aqui");

	importe1=parseInt(importe1);
	importe2=parseInt(importe2);
	importe3=parseInt(importe3);
	importe4=parseInt(importe4);

	ImporteTotal=importe1+importe2+importe3+importe4;

	if(ImporteTotal>100)
	{
		Porcentaje=ImporteTotal*0.1;
		ImporteModificado=ImporteTotal-Porcentaje;
	}
	else
	 {
	 	if(ImporteTotal<50)
	 	{
	 		Porcentaje=ImporteTotal*0.15;
	 		ImporteModificado=ImporteTotal+Porcentaje;
	 	}
	 	else
	 	{
	 		Porcentaje=ImporteTotal*0.05;
	 		ImporteModificado=ImporteTotal-Porcentaje;
	 	}
	}
	if(importe1>importe2 && importe1>importe3 && importe1>importe4)
	{
		ImporteMayor=importe1;
	}
	else
	{
		if(importe2>importe1 && importe2>importe3 && importe2>importe4)
		{
			ImporteMayor=importe2;
		}
		else
		{
			if(importe3>importe1 && importe3>importe2 && importe3>importe4)
			{
				ImporteTotal=importe3;
			}
			else
			{
				if(importe4>importe1 && importe4>Importe2 && importe4>importe4)
				{
					ImporteMayor=importe4;
				}
				else
				{
					if(importe1==importe2 && importe1==importe3 && importe1==importe4)
					{
						ImporteMayor=importe1;
					}
					else
					{
						if(importe1<importe2 && importe2==importe3 && importe2==importe4)
						{
							ImporteMayor=importe2;
						}
						else
						{
							if(importe2<importe1 && importe1==importe3 && importe1==importe4)
							{
								ImporteMayor=importe1;
							}
							else
							{
								if(importe3<importe2 && importe2==importe1 && importe2==importe4)
								{
									ImporteMayor=importe2;
								}
								else
								{
									if(importe4<importe2 && importe2==importe3 && importe2==importe1)
									{
										ImporteMayor=importe2;
									}
								}
							}
						}
					}
				}
			}
		}
	}
	alert("El total a pagar es "+ImporteModificado+" y el importe mayor ingresado es "+ImporteMayor);
}
