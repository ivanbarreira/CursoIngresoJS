function mostrar()
{
//tomo la edad  
var mesDelAño;
var Dias;

mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noveimbre":
		Dias=30;
	break;

	case "Febrero":
		Dias=28;
	break;

	default:
		Dias=31;
	break;
}

alert("Este mes tiene "+Dias+" días");
	
}//FIN DE LA FUNCIÓN