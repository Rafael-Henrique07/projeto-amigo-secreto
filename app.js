let amigos = [];

function adicionarAmigo() {
    let lista = document.getElementById('listaAmigos');
    let amigo = document.getElementById('amigo');
    let novoAmigo = document.createElement('li');
    nomeAmigo = amigo.value;


    if (nomeAmigo == "")  {
        alert('Digite um nome!');
    }

    amigos.push(nomeAmigo);
    novoAmigo.textContent = nomeAmigo;
    lista.appendChild(novoAmigo);
    limparCampo();
}

function limparCampo() {
    amigo.value = '';
}

function sortearAmigo() {
    if (amigos.length <= 2) {
        alert('Digite mais nomes por favor!');
    } else {
        limparLista();
        let numeroAleatorio = Math.floor(Math.random() * amigos.length); 
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto é <b>${amigos[numeroAleatorio]}</b>`;
    }
}

function limparLista() {
    let lista = document.getElementById('listaAmigos');
    lista.value = '';
}