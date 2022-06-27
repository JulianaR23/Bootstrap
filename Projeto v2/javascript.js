var nome = window.document.getElementById('nome')
var email = document.querySelector('#email')
var assunto = document.querySelector('#assunto')

var nomeOk = false
var emailOk = false
var assuntoOk = false

function validarNome() {
    let TxtNome = document.querySelector('#TxtNome')
    if (nome.value.length < 2) {
        TxtNome.innerHTML = 'Nome inválido!'
        TxtNome.style.color = 'red'
        nomeOk = false
    } else {
        TxtNome.innerHTML = 'Nome válido!'
        TxtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail() {
    let TxtEmail = document.querySelector('#TxtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        TxtEmail.innerHTML = 'E-mail inválido!'
        TxtEmail.style.color = 'red'
        emailOk = false
    } else {
        TxtEmail.innerHTML = "E-mail válido!"
        TxtEmail.style.color = 'green'
        emailOk = true
    }
} 

function validarAssunto(){
    let TxtAssunto = document.querySelector('#TxtAssunto')
    if(assunto.value.length >= 100){
        TxtAssunto.innerHTML = 'Assunto excedeu a quantidade de caracteres permitido que é 100!'
        TxtAssunto.style.color = 'red'
        TxtAssunto.style.display = 'block'
        assuntoOk = false
    } else{
        TxtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function Enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Enviado com sucesso!')
    } else {
        alert('Preencha os campos corretamente antes de enviar!')
    }
}