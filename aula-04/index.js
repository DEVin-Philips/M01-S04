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

function renderizaCategorias() {
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
    categoria: parseInt(evento.target.category.value),
    descricao: evento.target.description.value,
    curtido: false,
  };

  dicas.push(dica);
  renderizaDicas();
  renderizaTotais();
}

function obterNomeCategoria(id) {
  const categoria = categorias.find((categoria) => categoria.id === id);
  return categoria.nome;
}

function renderizaDicas(arrayDicas = dicas) {
  const lista = document.getElementById('list');
  lista.innerHTML = '';

  arrayDicas.forEach((dica) => {
    const li = document.createElement('li');
    li.classList.add('list-item');

    const titulo = document.createElement('h2');
    titulo.innerText = dica.nome;
    titulo.classList.add('subtitle');
    li.appendChild(titulo);

    const subtitulo = document.createElement('p');
    subtitulo.innerText = obterNomeCategoria(dica.categoria);
    li.appendChild(subtitulo);

    const descricao = document.createElement('p');
    descricao.innerText = dica.descricao;
    li.appendChild(descricao);

    // li.innerHTML = `
    //     <h2 class='subtitle'>${dica.nome}</h2>
    //     <p>${obterNomeCategoria(dica.categoria)}</p>
    //     <p>${dica.descricao}</p>
    // `;
    lista.appendChild(li);
  });
}

function obterTotal(id) {
  const dicasFiltradas = filtraDicas(id);
  return dicasFiltradas.length;
}

function renderizaTotais() {
  const lista = document.getElementById('total');
  lista.innerHTML = '';

  categorias.forEach((categoria) => {
    const totalCategoria = obterTotal(categoria.id);
    const li = document.createElement('li');
    li.classList.add('list-item');

    li.addEventListener('click', () => renderizaDicasFiltradas(categoria.id));

    const titulo = document.createElement('h2');
    titulo.innerText = categoria.nome;
    li.appendChild(titulo);

    const total = document.createElement('p');
    total.innerText = totalCategoria;
    li.appendChild(total);

    lista.appendChild(li);
  });
}

function renderizaDicasFiltradas(id) {
  const listaFiltrada = filtraDicas(id);
  renderizaDicas(listaFiltrada);
}

const filtraDicas = (id) => {
  const dicasFiltradas = dicas.filter((dica) => dica.categoria === id);
  return dicasFiltradas;
};

const formulario = document.getElementById('form-cadastro');
formulario.addEventListener('submit', addDica);

document.body.onload = () => {
  renderizaCategorias();
  renderizaTotais();
};
