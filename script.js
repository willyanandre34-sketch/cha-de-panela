// =======================
// CONFIGURAÇÃO FIREBASE
// =======================
const firebaseConfig = {
  apiKey: "COLOQUE_SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  databaseURL: "https://SEU_PROJETO.firebaseio.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_ID",
  appId: "SEU_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const presentesRef = db.ref('presentes');

// =======================
// ABAS
// =======================
function trocarAba(id) {
  document.querySelectorAll('.aba').forEach(aba => aba.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');
}

// =======================
// RENDERIZAÇÃO
// =======================
const lista = document.getElementById("lista-presentes");
const listaEscolhidos = document.getElementById("lista-escolhidos");

function renderizar(presentes) {
  lista.innerHTML = "";
  listaEscolhidos.innerHTML = "";

  presentes.forEach(presente => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${presente.imagem}">
      <h3>${presente.nome}</h3>
      <p>${presente.escolhidoPor ? "Escolhido por " + presente.escolhidoPor : "Disponível"}</p>
    `;

    if (!presente.escolhidoPor) {
      const btn = document.createElement("button");
      btn.textContent = "Escolher presente";
      btn.onclick = () => {
        const nome = prompt("Digite seu nome:");
        if (nome) {
          presentesRef.child(presente.id).update({ escolhidoPor: nome });
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

// =======================
// ESCUTAR BANCO DE DADOS
// =======================
presentesRef.on('value', snapshot => {
  const data = snapshot.val();
  if (!data) return;

  const presentesArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
  renderizar(presentesArray);
});
