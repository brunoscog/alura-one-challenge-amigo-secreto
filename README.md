<p align="center">
  <img src="brunoscog-cover.jpg" alt="Imagem de capa do projeto">
</p>

<h1 align="center"> ONE|Alura - Challenge Amigo Secreto </h1>

<p align="center">
  <img src="http://img.shields.io/static/v1?label=STATUS&message=PROJETO%20CONCLUIDO&color=GREEN&style=for-the-badge"/>
<br>
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" /p>
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)"/>
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/p>
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/p>

</p>

# Índice 

* [Descrição do Projeto](#descrição-do-projeto)
* [Status do Projeto](#status-do-projeto)
* [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
* [Acesso ao Projeto](#acesso-ao-projeto)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Desenvolvido por](##desenvolvido-por)

## Descrição do Projeto

O **Amigo Secreto** é uma aplicação web simples onde os usuários podem adicionar nomes de amigos em uma lista e realizar o sorteio de um amigo secreto de forma aleatória.

## Status do Projeto

<p align="center"> 
    Projeto concluído.
</p>

## Funcionalidades do Projeto


- `Adicionar nomes`: Os usuários podem adicionar nomes de amigos em um campo de texto.
- `Validação de entrada`: Não é possível adicionar nomes vazios à lista.
- `Visualização de lista`: Os amigos inseridos são exibidos em uma lista ordenada.
- `Sorteio`: Um botão permite realizar o sorteio de um amigo aleatório da lista e exibe o nome sorteado na tela.


<p align="center">
  <img src="https://via.placeholder.com/600x400.png?text=Gif+ou+Imagem+da+Aplicação" alt="Demonstração da aplicação Amigo Secreto">
</p>

## Blocos de Códigos

### index.html

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    <title>Amigo Secreto</title>
</head>

<body>
    <main class="main-content">
        <header class="header-banner">
            <h1 class="main-title">Amigo Secreto</h1>
            <img src="assets/amigo-secreto.png" alt="Imagem representativa de amigo secreto">
        </header>
        
        <section class="input-section">
            <h2 class="section-title">Digite o nome dos seus amigos</h2>
            <div class="input-wrapper">
                <input type="text" id="amigo" class="input-name" placeholder="Digite um nome">
                <button class="button-add" onclick="adicionarAmigo()">Adicionar</button>
            </div>
           
            <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
            <ul id="resultado" class="result-list" aria-live="polite"></ul>

            <div class="button-container">
                <button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
                    <img src="assets/play_circle_outline.png" alt="Ícone para sortear">
                    Sortear amigo
                </button>
            </div>
        </section>
    </main>

    <script src="app.js" defer></script>
</body>
</html>
```

### app.js

```
let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById("amigo").value.trim();
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nomeAmigo);
    document.getElementById("amigo").value = "";
    atualizarListaAmigos();
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
```

### syle.css

```
:root {
    --color-primary: #4B69FD;
    --color-secondary: #FFF9EB;
    --color-tertiary: #C4C4C4;
    --color-button: #fe652b;
    --color-button-hover: #e55720;
    --color-text: #444444;
    --color-white: #FFFFFF;
}

/* Estilos gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

/* Banner */
.header-banner {
    flex: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 0;
}

/* Seção de entrada */
.input-section {
    flex: 60%;
    background-color: var(--color-secondary);
    border: 1px solid #000;
    border-radius: 64px 64px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
}

/* Títulos */
.main-title {
    font-size: 48px;
    font-family: "Merriweather", serif;
    font-weight: 900;
    font-style: italic;
    color: var(--color-white);
}

.section-title {
    font-family: "Inter", serif;
    font-size: 36px;
    font-weight: 700;
    color: var(--color-primary);
    margin: 10px 0;
    text-align: center;
}

/* Contêineres de entrada e botão */
.input-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin-top: 20px;
}

.input-name {
    width: 100%;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 25px 0 0 25px;
    font-size: 16px;
}

.button-container {
    width: 300px;
    justify-content: center;
}

/* Estilos de entrada de texto */
.input-title {
    flex: 1;
    padding: 10px 15px;
    font-size: 16px;
    border: 2px solid #333;
    border-right: none;
    border-radius: 25px 0 0 25px;
    font-family: "Merriweather", serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Estilos de botão */
button {
    padding: 15px 30px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    border: 2px solid #000;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.button-add {
    background-color: var(--color-tertiary);
    color: var(--color-text);
    border-radius: 0 25px 25px 0;
}

.button-add:hover {
    background-color: #a1a1a1;
}

/* Listas */
ul {
    list-style-type: none;
    color: var(--color-text);
    font-family: "Inter", sans-serif;
    font-size: 18px;
    margin: 20px 0;
}

.result-list {
    margin-top: 15px;
    color: #05DF05;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
}

/* Botão de sortear título */
.button-draw {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 40px;
    color: var(--color-white);
    background-color: var(--color-button);
    font-size: 16px;
}

.button-draw img {
    margin-right: 40px;
}

.button-draw:hover {
    background-color: var(--color-button-hover);
}
```

## Acesso ao Projeto

Você pode acessar o código fonte do projeto [clicando aqui](https://github.com/brunoscog/alura-one-challenge-amigo-secreto) ou baixando o repositório usando o comando:

```bash
git clone https://github.com/brunoscog/alura-one-challenge-amigo-secreto.git
```

## Tecnologias Utilizadas

- `HTML`: Estrutura da página.
- `CSS`: Estilização do layout da aplicação.
- `JavaScript`: Lógica para adicionar nomes e sortear o amigo secreto.

## Desenvolvido por


<img src="https://media.licdn.com/dms/image/v2/D4D03AQE5oHHVZzjwIg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727484820568?e=2147483647&v=beta&t=JuBlRoJK5c2EUbs18LthUHalzmlM4A_2Zi16PzAlwmc" width=115><br><sub>Bruno Scognamiglio</sub>




