function mostrar()
{
	var numero
	var contador;

	numero = prompt("ingrese un número entre 0 y 10.");
	contador = 0

	while(numero<0 || numero>10)
	{
		numero = prompt("ingrese un número entre 0 y 10.");
		++contador
		if(contador==3);
		{
			break;
		}
	}
	if(numero>=0 && numero<11)
	{
		document.getElementById('Numero').value=numero;
	}
}//FIN DE LA FUNCIÓN