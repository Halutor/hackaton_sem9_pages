// Código para ejercicio Nro 04
var base= parseInt(prompt('Ingrese Altura'));
var altura= parseInt(prompt('Ingrese Base'));


console.log(`El área del triangulo es: ${areaTriangulo(base, altura)}`);

//Área del triangulo
function areaTriangulo(num1, num2) {
    area = (num1 * num2) / 2;
    return area;
}
