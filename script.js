function trocarAba(id) {
  document.querySelectorAll('.aba').forEach(aba =>
    aba.classList.remove('ativa')
  );
  document.getElementById(id).classList.add('ativa');
}

const presentes = [
  {
    nome: "Jogo de Pratos",
    imagem: "https://via.placeholder.com/200",
    escolhidoPor: null
  },
  {
    nome: "Liquidificador",
    imagem: "https://via.placeholder.com/200",
    escolhidoPor: null
  },
  {
    nome: "Conjunto de Copos",
    imagem: "https://via.placeholder.com/200",
    escolhidoPor: null
  }
];

const lista = document.getElementById("lista-presentes");
const listaEscolhidos = document.getElementById("lista-escolhidos");

function renderizar() {
  lista.innerHTML = "";
  listaEscolhidos.innerHTML = "";

  presentes.forEach(presente => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${presente.imagem}">
      <h3>${presente.nome}</h3>
      <p>${presente.escolhidoPor 
        ? "Escolhido por " + presente.escolhidoPor 
        : "Disponível"}
      </p>
    `;

    if (!presente.escolhidoPor) {
      const btn = document.createElement("button");
      btn.textContent = "Escolher presente";
      btn.onclick = () => {
        const nome = prompt("Digite seu nome:");
        if (nome) {
          presente.escolhidoPor = nome;
          renderizar();
        }
      };
      card.appendChild(btn);
    } else {
      const li = document.createElement("li");
      li.textContent = `${presente.nome} — ${presente.escolhidoPor}`;
      listaEscolhidos.appendChild(li);
    }

    lista.appendChild(card);
  });
}

renderizar();
