function mostrar()
{
	var TipoDePago;
	var Paquete;
	var Descuento;
	var Total;
	var Precio;

	TipoDePago=prompt("Si va a pagar con tarjeta visa escriba la palabra: visa, si paga por paypal escriba: paypal, si lo hace por mercado pago esciba la palabra: mercado, si paga en efectivo escriba: efectivo, si desea pagar por otro metodo escribalo","escriba aqui");
	Paquete=prompt("Elija su paquete. Si quiere solamente desayunos escriba: soloDesayunos, si quiere todo incluido ingese: todoIncluido, si quiere otro paquete escribalo","escruba aqui");
	Precio=prompt("Ingrese el precio de su habitación","escriba aqui");

	Precio=parseInt(Precio);

	switch(TipoDePago)
	{
		case "visa":
		Descuento=0.1;
		break;

		case "paypal":
		switch(Paquete)
		{
			case "todoIncluido":
			Descuento=0.25;
			break;
		
			default:
			Descuento=0.15;
			break;
		}
		break;

		case "mercado":
		Descuento=0.1;
		break;

		case "efectivo":
		switch(Paquete)
		{
			case "soloDesayunos":
			Descuento=0.3;
			break;

			case "todoIncluido":
			Descuento=0.35;
			break;

			default:
			Descuento=0.2;
			break;
		}
		break;

		default:
		Descuento=0.05;
		break;
	}
	Total=Precio-Precio*Descuento;
	alert("Usted debe pagar $"+Total);
}
