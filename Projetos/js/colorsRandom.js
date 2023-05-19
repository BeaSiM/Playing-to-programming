// Para gerar números aleatórios inteiros, é necessário utilizar a função "Math.floor(Math.random());". A função sempre gera o valor de 0.
//Então, para obter números aleatórios até o limite máximo de 10, por exemplo, devemos multiplicar pelo número desejado e somar com 1, assim:

function trocaCor() {
    var troca = document.getElementById("trocar");
    var resposta = document.getElementById("resp");

    resp.innerHTML = Math.floor(Math.random() * (9 + 1));
}