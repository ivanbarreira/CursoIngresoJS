function mostrar()
{
	var Libros;
	var Precio;
	var ModoDePago;
	var Descuento1;
	var Descuento2;
	var Recarga;
	var Mensaje1;
	var Mensaje2;
	var Mensaje3;
	var Mensaje;

	Libros=prompt("Ingrese la cantidad de libros que va a comprar","escriba aqui");
	Precio=prompt("Ingrese el costo de la compra","escriba aqui");
	ModoDePago=prompt("Si desea pagar con tarjeta escriba la palabra tarjeta, de lo contrario escriba la forma de su pago","escriba aqui");

	Libros=parseInt(Libros);
	Precio=parseInt(Precio);

	Descuento1=Precio*0.1;
	Descuento2=Precio*0.15;
	Recarga=Precio*0.1;
	Mensaje1="Usted compro "+Libros+" libros,";
	Mensaje2=" gasto $"+Precio;
	Mensaje3=" y pago con "+ModoDePago;

	if(Libros>2)
	{
		Precio=Precio-Descuento1;
		Mensaje1=Mensaje1+" por lo tanto tiene un descuento del 10% ($"+Descuento1+"), ";
	}
	if(Precio>2000)
	{
		Precio=Precio-Descuento2;
		Mensaje2=Mensaje2+", por lo tanto tiene un 15% de descuento ($"+Descuento2+"),";
	}
	if(ModoDePago=="tarjeta")
	{
		Precio=Precio+Recarga;
		Mensaje3=Mensaje3+" por lo cual que se le recargara un 10% ($"+Recarga+")";
	}

	Mensaje=Mensaje1+Mensaje2+Mensaje3+". En total debe pagar $"+Precio;
	alert(Mensaje);
}
