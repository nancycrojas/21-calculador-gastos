//Calculador gastos

//Crear un programa que pida al usuario 
//cuanto dinero disponible tiene,
//y vaya preguntando cuánto tiene que pagar por cada servicio,
//pidiendo el nombre del servicio
//y el monto a pagar, uno a la vez. 
//Cada vez que pide ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan por ingresar, utilizando una variable, 
//y mostrar cuánto dinero disponible queda. 
//Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. Hacerlo con 3 servicios.


const dineroDisponible = Number(prompt("Ingresa tu dinero disponible (No incluyas el símbolo $)"));
const Serv1 = prompt("Ingresa el nombre del servicio");
const monto1 = Number(prompt("Ingresa el monto a pagar (No incluyas el símbolo $)"));
const cantidad = prompt("¿Cuántos servicios quedan por ingresar?");
alert (`Tu dinero disponible es $${dineroDisponible - monto1}`);
const Serv2 = prompt("Ingresa el nombre del servicio");
const monto2 = Number(prompt("Ingresa el monto a pagar (No incluyas el símbolo $)"));
const cantidad1 = prompt("¿Cuántos servicios quedan por ingresar?");
alert (`Tu dinero disponible es $${dineroDisponible - monto1 - monto2}`);
const Serv3 = prompt("Ingresa el nombre del servicio");
const monto3 = Number(prompt("Ingresa el monto a pagar (No incluyas el símbolo $)"));
const cantidad2 = prompt("¿Cuántos servicios quedan por ingresar?");
alert (`Tu dinero disponible es $${dineroDisponible - monto1 - monto2 - monto3}`);
alert (`Los servicios a pagar son ${Serv1} $${monto1}, ${Serv2} $${monto2} y ${Serv3} $${monto3} `);
alert (`El dinero disponible es $${dineroDisponible - (monto1 + monto2 + monto3)}`);