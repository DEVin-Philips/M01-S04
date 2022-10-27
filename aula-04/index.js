let dicas = [];
const categorias = [
  {
    id: 1,
    nome: 'SoftSkills',
  },
  {
    id: 2,
    nome: 'FrontEnd',
  },
  {
    id: 3,
    nome: 'BackEnd',
  },
  {
    id: 4,
    nome: 'FullStack',
  },
];

function criaCategorias() {
  const select = document.getElementById('category');
  categorias.forEach(function (categoria) {
    const opcao = document.createElement('option');
    opcao.innerText = categoria.nome;
    opcao.value = categoria.id;
    select.appendChild(opcao);
  });
}

function addDica(evento) {
  evento.preventDefault();

  const dica = {
    id: new Date().getTime(),
    nome: evento.target.name.value,
    categoria: evento.target.category.value,
    descricao: evento.target.description.value,
  };

  dicas.push(dica);
}

const formulario = document.getElementById('form-cadastro');
formulario.addEventListener('submit', addDica);

document.body.onload = criaCategorias;
