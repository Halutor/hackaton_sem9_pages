// Código para ejercicio Nro 12
var soles= parseInt(prompt('Ingrese soles'));

console.log(`Cuesta: ${convDolarToSoles(soles)} dólares`);

//Conversión de metro a pulgada
function convDolarToSoles(num1) {
    convertir = (num1 / 3.65).toFixed(2);
    return convertir;
}
