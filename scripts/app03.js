// Código para ejercicio Nro 03
var base= parseInt(prompt('Ingrese Altura'));
var altura= parseInt(prompt('Ingrese Base'));


console.log(`El área del rectangulo es: ${areaRectangulo(base, altura)}`);

//Área del rectangulo
function areaRectangulo(num1, num2) {
    area = num1 * num2;
    return area;
}
