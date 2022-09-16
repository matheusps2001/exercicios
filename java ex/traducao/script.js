var word = document.querySelector('#word')
var traducao = document.querySelector('span')

function traduzir(){
    var op = word.value

    switch(op){

        case "oi":
        traducao.innerHTML = "hi"
        break;

        case "gato":
        traducao.innerHTML = "cat"
        break;

        case "cachorro":
        traducao.innerHTML = "dog"
        break;

        case "amigo":
        traducao.innerHTML = "friend"
        break;

        case "caneta":
        traducao.innerHTML = "blue"
        break;

        case "vermelho":
        traducao.innerHTML = "red"
        break;

        case "banana":
        traducao.innerHTML = "banana"
        break;

        case "amor":
        traducao.innerHTML = "love"
        break;

        case "carro":
        traducao.innerHTML = "car"
        break;

        case "tela":
        traducao.innerHTML = "screen"
        break;
    }
}

