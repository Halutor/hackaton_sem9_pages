// Código para ejercicio Nro 11
var anoAntiguedad = parseInt(prompt('Introducir años de antiguedad'));

console.log(`Te corresponde como bono: ${obtieneBono(bono)} soles`);


//Obtiene Bono
function obtieneBono(num1) {

    if (anoAntiguedad < 5) 
        num1 = anoAntiguedad * 100;
    else
        num1 = 5 * 100;
     
}
