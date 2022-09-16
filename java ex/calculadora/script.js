var n1 = document.querySelector ('#n1')
var n2 = document.querySelector ('#n2')
var resultado = document.querySelector ('span')

function chamar(){
    resultado.innerHTML = parseFloat(n1.value) + parseFloat(n2.value)
}

function chamar2(){
    resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value)
}

function chamar3(){
    resultado.innerHTML = parseFloat(n1.value) / parseFloat(n2.value)
}

function chamar4(){
    resultado.innerHTML = parseFloat(n1.value) - parseFloat(n2.value)
}