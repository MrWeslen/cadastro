
/** Variaveis */
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmeSenha')


let nome =document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false;

let usuario =document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false;

let senha =document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false;

let confirmeSenha =document.querySelector('#confirmeSenha')
let labelConfirmeSenha = document.querySelector('#labelConfirmeSenha')
let validConfirmeSenha = false;

let msgErro = document.querySelector('#msgErro')
let msgSucesso = document.querySelector('#msgSucesso')

/** Validação do Nome */
nome.addEventListener('keyup', () =>{
    if(nome.value.length <=2){
        labelNome.setAttribute('style', 'color:red')
        labelNome.innerHTML = 'Nome - Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color:red')
        validNome = false;
    }else{
        labelNome.setAttribute('style', 'color:green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color:green')
        validNome = true;
    }

})

/** Validação do Usuario */
usuario.addEventListener('keyup', () =>{
    if(usuario.value.length <=4){
        labelUsuario.setAttribute('style', 'color:red')
        labelUsuario.innerHTML = 'Usuario - Insira no minimo 5 caracteres'
        usuario.setAttribute('style', 'border-color:red')
        validUsuario = false;
    }else{
        labelUsuario.setAttribute('style', 'color:green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color:green')
        validUsuario = true;
    }

})

/** Validação da Senha */
senha.addEventListener('keyup', () =>{
    if(senha.value.length <=7){
        labelSenha.setAttribute('style', 'color:red')
        labelSenha.innerHTML = 'Senha - Insira no minimo 8 caracteres'
        senha.setAttribute('style', 'border-color:red')
        validSenha = false;
    }else{
        labelSenha.setAttribute('style', 'color:green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color:green')
        validSenha = true;
    }

})

/** Validação do confirmeSenha */
confirmeSenha.addEventListener('keyup', () =>{
    if(senha.value != confirmeSenha.value){
        labelConfirmeSenha.setAttribute('style', 'color:red')
        labelConfirmeSenha.innerHTML = 'Confirmar Senha - As senhas não conferem'
        confirmeSenha.setAttribute('style', 'border-color:red')
        validConfirmeSenha = false;
    }else{
        labelConfirmeSenha.setAttribute('style', 'color:green')
        labelConfirmeSenha.innerHTML = 'Confirmar Senha'
        confirmeSenha.setAttribute('style', 'border-color:green')
        validConfirmeSenha = true;
    }
})

/** Validação do btn cadastrar */

function cadastrar(){
    if(validNome && validUsuario && validSenha && validConfirmeSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        
        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
      
      
        msgSucesso.setAttribute('style', 'display:block')
        msgSucesso.innerHTML ='<strong>Cadastrado usuario...</strong>'
        msgErro.setAttribute('style', 'display:none')
        msgErro.innerHTML =''
            
            setTimeout(()=>{
                window.location.href = '../index.html'
            }, 2000)
           

    }else{
        msgErro.setAttribute('style', 'display:block')
        msgErro.innerHTML ='<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSucesso.innerHTML =''
        msgSucesso.setAttribute('style', 'display:none')
       
    }

}



/** Deixar a senha visivel ao clicar no 'eye' */

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type')== 'password'){
        inputSenha.setAttribute('type', 'text')
    } else{
        inputSenha.setAttribute('type', 'password')
    }
})



btnConfirm.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#confirmeSenha')

    if(inputConfirmSenha.getAttribute('type')== 'password'){
        inputConfirmSenha.setAttribute('type', 'text')
    } else{
        inputConfirmSenha.setAttribute('type', 'password')
    }
})

