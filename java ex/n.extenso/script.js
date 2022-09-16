var word = document.querySelector('#word')
var traducao = document.querySelector('span')

function traduzir(){
    var op = word.value

    switch(op){

        case "1":
        traducao.innerHTML = "um"
        break;

        case "2":
        traducao.innerHTML = "dois"
        break;

        case "3":
        traducao.innerHTML = "três"
        break;

        case "4":
        traducao.innerHTML = "quatro"
        break;

        case "5":
        traducao.innerHTML = "cinco"
        break;

        case "6":
        traducao.innerHTML = "seis"
        break;

        case "7":
        traducao.innerHTML = "sete"
        break;

        case "8":
        traducao.innerHTML = "oito"
        break;

        case "9":
        traducao.innerHTML = "nove"
        break;

        case "10":
        traducao.innerHTML = "dez"
        break;
    }
}