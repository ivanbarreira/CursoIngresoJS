function mostrar()
{
 var Amigos;
 var Total;
 var Propina;
 var iva;
 var CadaUno;
 var TotalFinal;

 Amigos=prompt("Ingrese la cantidad de amigos","escriba aqui");
 Total=prompt("Ingrese el total a pagar","escriba aqui");

 Amigos=parseInt(Amigos);
 Total=parseInt(Total);

 Propina=Total*0.1;
 iva=Total*0.21;

 TotalFinal=Total+Propina+iva;

 CadaUno=TotalFinal/Amigos;

 alert("En el grupo son "+Amigos+" amigos y deben pagar $"+Total+" entre todos, a eso hay que agregarle una propina del 10% ($"+Propina+") tambien el IVA ($"+iva+") por lo cual deben pagar un total de $"+TotalFinal+" asi que deben pagar $"+CadaUno+" cada uno");
}