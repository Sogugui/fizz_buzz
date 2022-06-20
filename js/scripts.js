//Imprime todos los números del 1 al 1000 por consola, con la salvedad de todos aquellos números 
//que sean múltiplos de 3 que en vez de imprimir el número, se imprimirá fizz y además,
// en lugar de los números que sean múltiplos de 5 se imprimirá buzz.
var numero = 1;
while (numero <= 1000) {
    if (numero % 3 == 0 && numero % 5 == 0) {
        console.log("FizzBuzz");
    } else if (numero % 3 == 0) {
        console.log("Fizz");
    } else if (numero % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(numero);
    }
    numero++;
}

