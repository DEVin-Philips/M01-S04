// const a = [10, 20, 30, 40];
// let b = [...a];

// const [p1, p2, ...rest] = a;
// console.log(p1, p2, rest);

// const pessoa = { nome: 'teste', idade: 20, sexo: 'F', peso: 20 };
// const { nome, sexo, ...params } = pessoa;

// console.log(nome, sexo, params);

const alunos = ['aluno 1', 'aluno 2', 'aluno 3'];
// console.log(alunos[0]);
// console.log(alunos[1]);
// console.log(alunos[2]);

// console.log(alunos.length);

// for (let index = 0; index < alunos.length; index++) {
//   const element = alunos[index];
//   console.log(element);
// }

// const result = alunos.push('aluno 3');
// console.log(result, alunos);

// const pop = alunos.pop();
// console.log(pop, alunos);

// const shift = alunos.shift();
// console.log(shift, alunos);

// const unshift = alunos.unshift('aluno 0');
// console.log(unshift, alunos);

const alunosSlice = alunos.slice(0, 1);
alunosSlice.push('aluno 4');

alunos.push('aluno 5');
console.log(alunosSlice);
console.log(alunos);
