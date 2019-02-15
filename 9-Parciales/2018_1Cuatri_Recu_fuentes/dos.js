function mostrar()
{
 var Precio;
 var Descuento;
 var iva;
 var PrecioDescontado;
 var PrecioFinal;

 Precio=prompt("Ingresa el valor de su compra en pesos","escribi aca");

 Precio=parseInt(Precio);

 Descuento=Precio*0.1;

 PrecioDescontado=Precio-Descuento;

 iva=PrecioDescontado*0.21;

 PrecioFinal=PrecioDescontado+iva;

 alert("tu compra es de $"+Precio+" tenes un descuento del 10% queda en $"+PrecioDescontado+", mas el iva es $"+PrecioFinal);
}
