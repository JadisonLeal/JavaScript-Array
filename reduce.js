const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) =>{
        return acumulador + nota;
    }, 0)

    const media = somaDasNotas / notasDaSala.length;
    return media
}

console.log(calculaMedia(salaJS)); //7.5
console.log(calculaMedia(salaJava)); //6.5
console.log(calculaMedia(salaPython)); //7





//    Maneira abreviada de usar o reduce 
function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0)

    const media = somaDasNotas / notasDaSala.length;
    return media
}

calculaMedia(salaJS);