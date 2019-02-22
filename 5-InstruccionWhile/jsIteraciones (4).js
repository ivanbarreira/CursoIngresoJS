function mostrar()
{
	var numero
	var contador;

	numero = prompt("ingrese un número entre 0 y 10.");
	contador = 0

	while(numero<0 || numero>9)
	{
		numero = prompt("ingrese un número entre 0 y 10.");
		++contador
		if(contador==3);
		{
			break;
		}
	}

}//FIN DE LA FUNCIÓN