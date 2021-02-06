// Código para ejercicio Nro 06
var numero01= parseInt(prompt('Ingrese horas trabajadas'));
var numero02= parseInt(prompt('Ingrese pago por hora'));


console.log(`El pago semanal que le corresponde es: ${pagoSemanal(numero01, numero02)} Soles`);

//Calculo de sueldo
function pagoSemanal(num1, num2) {
    pago = num1 * num2;
    return pago;
}
