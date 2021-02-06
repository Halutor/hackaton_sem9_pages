// Código para ejercicio Nro 09
var anoNac= parseInt(prompt('Introducir año de nacimiento'));
var anoActual=2021;

console.log(`Tienes: ${obtieneEdad(anoNac, anoActual)} años`);

//Obtiene edad
function obtieneEdad(num1, num2) {
    edad = num2 - num1;
    return edad;
}
