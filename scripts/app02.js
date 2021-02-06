// Código para ejercicio Nro 02
var numero01= parseInt(prompt('Ingrese primera nota'));
var numero02= parseInt(prompt('Ingrese segunda nota'));
var numero03= parseInt(prompt('Ingrese tercera nota'));
var numero04= parseInt(prompt('Ingrese cuarta nota'));

console.log(`El promedio es: ${promedio4(numero01, numero02, numero03, numero04)}`);

//Promedio
function promedio4(num1, num2, num3, num4) {
    promFinal = (num1 + num2 + num3 + num4) / 4;
    return promFinal;
}
