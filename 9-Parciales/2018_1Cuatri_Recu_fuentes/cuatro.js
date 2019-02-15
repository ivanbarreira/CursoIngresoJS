function mostrar()
{
	var Libros;
	var Precio;
	var ModoDePago;
	var Descuento1;
	var Descuento2;
	var Recargo;

	Libros=prompt("Ingrese la cantidad de libros que va a comprar","escriba aqui");
	Precio=prompt("Ingrese el costo de la compra","escriba aqui");
	ModoDePago=prompt("Si desea pagar con tarjeta escriba la palabra tarjeta, de lo contrario escriba la palabra efectivo","escriba aqui");

	Libros=parseInt(Libros);
	Precio=parseInt(Precio);

	Descuento1=Precio*0.1;
	Descuento2=Precio*0.15;
	Recargo=Precio*0.1;

	if(Libros>2)
	{
		Precio=Precio-Descuento1;
	}else
	{
		if(Precio>2000)
		{
			Precio=Precio-Descuento2;
	}	}
	if(ModoDePago!="tarjeta")
	{
		Precio=Precio+Recarga;
	}
	alert("Usted va a comprar "+Libros+)
}
