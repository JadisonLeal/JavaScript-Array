// const alunos = ["Ju", "Leo", "Raquel", "Etevaldo"];
// const medias = [7, 8, 5, 10];

// const listaDeAlunosEMedias = [alunos, medias];

// function exibeNomeENota (aluno) {
//     if(listaDeAlunosEMedias[0].includes(aluno)) {
//         const indice = listaDeAlunosEMedias[0].indexOf(aluno);
//         const mediaDoAluno = listaDeAlunosEMedias[1][indice]
//         console.log(aluno + " Tem a média: " + mediaDoAluno);
//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }
// exibeNomeENota("Raquel");

// function exibeNomeENota(aluno) {
//     if(listaDeAlunosEMedias[0].includes(aluno)) {
//         const alunos = listaDeAlunosEMedias[0]; 
//         const medias = listaDeAlunosEMedias[1];
//         const indice = alunos.indexOf(aluno)
//         const mediaDoAluno = medias[indice]
        
//         console.log("Aluno cadastrado! " + mediaDoAluno);
//     } else {
//         console.log("Aluno nao cadastrado!");
//     }
// }
// exibeNomeENota("Leo")



//SINTAXE NOVA
// function ExibeNomeENota(aluno) {
//     if(listaDeAlunosEMedias[0].includes(aluno)) {
//         const [alunos, medias] = listaDeAlunosEMedias;
//         const indice = alunos.indexOf(aluno);
//         const mediaDoAluno = medias[indice];

//         console.log(aluno + "  " + mediaDoAluno);
//     }
// }

// ExibeNomeENota("Leo");

const alunos = ["Ju", "Leo", "Raquel", "Etevaldo"];
const medias = [7, 8, 5, 10];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)) {
        const [alunos, medias] = listaDeAlunosEMedias;
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];
        
        console.log(mediaDoAluno);
    }
}

exibeNomeENota("Ju");