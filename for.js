const numeros = [10, 6.5, 8, 7.5];
var totalNumeros = 0;


for(let i = 0; i < numeros.length; i++) {
    totalNumeros += numeros[i];
}
media = totalNumeros / numeros.length
console.log("A media das notas é " + media);
