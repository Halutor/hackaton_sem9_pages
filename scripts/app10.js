// Código para ejercicio Nro 10
var nombre1= prompt('Ingrese nombre');
var edad01= parseInt(prompt('Introducir edad'));

var nombre2= prompt('Ingrese nombre');
var edad02= parseInt(prompt('Introducir edad'));

var nombre3= prompt('Ingrese nombre');
var edad03= parseInt(prompt('Introducir edad'));


console.log(`Nombre: ${nombre1} ${edad01} años`);
console.log(`Nombre: ${nombre2} ${edad02} años`);
console.log(`Nombre: ${nombre3} ${edad03} años`);


obtieneMenor(edad01, edad02, edad03);

//Obtiene Menor
function obtieneMenor(num1, num2, num3) {
    menor = num1;    
    nombre = nombre1;

    if (num2 < menor) {
        menor = num2;    
        nombre = nombre2;
    }

    if (num3 < menor) {
        menor = num3;    
        nombre = nombre3;
    }
    
    
    return console.log(`Nombre del menor: ${nombre} ${menor} años`); ;
}
