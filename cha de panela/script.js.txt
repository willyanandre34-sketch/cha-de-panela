// CONFIGURAÇÃO DO FIREBASE
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO",
  projectId: "SEU_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const lista = document.getElementById("lista-presentes");

// Lista inicial de itens
const presentes = [
  "Jogo de Pratos",
  "Conjunto de Copos",
  "Panela",
  "Liquidificador",
  "Faqueiro"
];

// Criar itens no banco (somente 1x)
presentes.forEach(item => {
  db.collection("presentes").doc(item).set({
    nome: item,
    escolhido: false
  }, { merge: true });
});

// Ler itens em tempo real
db.collection("presentes").onSnapshot(snapshot => {
  lista.innerHTML = "";
  snapshot.forEach(doc => {
    const data = doc.data();
    const li = document.createElement("li");
    li.textContent = data.nome;

    if (data.escolhido) {
      li.classList.add("escolhido");
    } else {
      li.onclick = () => escolherItem(doc.id);
    }

    lista.appendChild(li);
  });
});

function escolherItem(id) {
  db.collection("presentes").doc(id).update({
    escolhido: true
  });
}
