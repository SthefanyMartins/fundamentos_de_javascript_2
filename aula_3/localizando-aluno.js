const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10, 7, 9, 6];

// includes -> boolean
// indexOf -> index (3)

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
  if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
    let index = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
    return listaDeNotasEAlunos[0][index] + ', sua media é ' + listaDeNotasEAlunos[1][index];
  } else {
    return "Aluno não esta cadastrado";
  }
}

console.log(exibeNomeNota("Juliana"));
