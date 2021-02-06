// Código para ejercicio Nro 07
var metros= parseInt(prompt('Ingrese metros a convertir'));

console.log(`Pedir: ${convMetrotoPulgada(metros)} pulgadas`);

//Conversión de metro a pulgada
function convMetrotoPulgada(num1) {
    convertir = num1 * 0.0254;
    return convertir;
}
