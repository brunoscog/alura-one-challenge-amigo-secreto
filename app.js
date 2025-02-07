//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById("amigo").value.trim();
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }
}

function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione ao menos um amigo antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}

