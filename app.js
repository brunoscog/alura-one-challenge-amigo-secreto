// Array que armazenará os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const nomeAmigo = document.getElementById("amigo").value.trim();

    // Validação: Se o campo estiver vazio, exibe um alerta
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada
    document.getElementById("amigo").value = "";

    // Atualiza a lista de amigos exibida
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos no HTML
function atualizarListaAmigos() {
    // Captura o elemento da lista
    const lista = document.getElementById("listaAmigos");

    // Limpa a lista atual
    lista.innerHTML = "";

    // Percorre o array de amigos e cria um elemento <li> para cada nome
    amigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    // Validação: Verifica se a lista tem pelo menos 1 amigo
    if (amigos.length === 0) {
        alert("Adicione ao menos um amigo antes de sortear.");
        return;
    }

    // Gera um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Captura o nome sorteado
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o nome sorteado na tela
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}
