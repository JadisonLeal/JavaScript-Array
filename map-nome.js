const nomes = ["ana Julia", "Caio vinicius", "BIA braga"];

const nomesPadronizados = nomes.map((nome) =>{
    return nome.toUpperCase();
})
console.log(nomesPadronizados);


// modo mais usado
const nomesAtualizados = nomes.map((nome) => nome.toUpperCase());
console.log(nomesAtualizados); 