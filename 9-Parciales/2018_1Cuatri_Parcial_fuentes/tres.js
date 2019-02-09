function mostrar()
{
 var Precio;
 var Porcentaje;
 var Descuento;
 var Preciofinal;

 Precio=prompt("Ingrese el precio","escriba aqui");
 Porcentaje=prompt("Ingrese el porcentaje de descuento","escriba solo el numero del porcentaje aqui");

 Precio=parseInt(Precio);
 Porcentaje=parseInt(Porcentaje);

 Porcentaje=Porcentaje/100;
 Descuento=Precio*Porcentaje;
 Preciofinal=Precio-Descuento;

 elPrecioFinal.value=(Preciofinal);

}
