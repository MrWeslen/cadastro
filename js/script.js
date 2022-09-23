const inputElement = document.querySelector("input")
const buttonElement = document.querySelector("form button")
const ulElement = document.querySelector("ul")



buttonElement.onclick = ev =>{
    ev.preventDefault();

    if (inputElement.value) {  
        const textElement = document.createElement("span")
        textElement.innerHTML = inputElement.value;

        const btnElement = document.createElement("button")

        btnElement.innerText ="Remover";

        const liElement = document.createElement("li")

        liElement.appendChild(textElement)
        liElement.appendChild(btnElement)


        btnElement.onclick = () => {
        ulElement.removeChild(liElement)
        }
        ulElement.appendChild(liElement)  
        
       


        inputElement.value = ""      
    }
 }

    let userLogado = JSON.parse(localStorage.getItem('userLogado'))

    let logado = document.querySelector('#logado')

    logado.innerHTML = 'Olá! ' + userLogado.nome


    if(localStorage.getItem('token') == null ){
        alert('Você precisa estar logado para acessar essa página')
        window.location.href = '../index.html'

    }
    


   function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = '../index.html'
   }