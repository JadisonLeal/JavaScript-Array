const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10];
// const novasNotas = [5,...notas, 10]; também funciona!!

console.log(notas);
console.log(novasNotas);



// ... se chama spread operator significa operador de espalhamento 
// const novasNotas = notas; não funciona pq altera os numeros na const notas java scritp entende que os dois arrays são o mesmo