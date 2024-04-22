const lastNameMessage = document.getElementById("lastName")
const firstNameMessage = document.getElementById("firstName")
const emailAddressMessage = document.getElementById("emailAddress")
const messageDescricaoMessage = document.getElementById("messageDescricao")
const buttonGetMessage = document.getElementById("buttonGet")
let camposValidos = false;

    function validarCampos(){
        verificarEmail()
        verificarNome()
        verificarMessage()
        if(!camposValidos){

        }else{
            send()
        }
    }

    function verificarEmail(){
        const email = document.getElementById("emailAddress").value;
        if (!email){
            document.getElementById("emailIncorreto").style.display = "block";
             camposValidos = false;
        }
        else if (validarEmail(email)){
            document.getElementById("emailIncorreto").style.display = "none";
             camposValidos = true;
        }
        else{
            document.getElementById("emailIncorreto").style.display = "block";
             camposValidos = false;
        }

    }

    function verificarNome(){
        const nomePrimeiro = document.getElementById("firstName").value
        const nomeUltimo = document.getElementById("lastName").value

        if(!nomePrimeiro || !nomeUltimo){
            document.getElementById("nomeIncorreto").style.display = "block";
             camposValidos = false;
        }
        else{
            document.getElementById("nomeIncorreto").style.display = "none";
        }
    }

    function verificarMessage(){
        const message = document.getElementById("messageDescricao").value

        if(!message){
            document.getElementById("messageIncorreta").style.display = "block";
             camposValidos = false;
        }
        else{
            document.getElementById("messageIncorreta").style.display = "none";
        }
    }

    function validarEmail(emailAddressMessage){
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(emailAddressMessage);
    }    

    function cadastrarMessage() {
        var registro = { 
            lastNa: lastNameMessage.value,
            firstN: firstNameMessage.value,
            email: emailAddressMessage.value,
            message: messageDescricaoMessage.value
        };
        var dados = JSON.stringify(registro);
        localStorage.setItem("dadosMessage", dados);

}

    function send() {
        cadastrarMessage();
        console.log("Enviado com sucesso")
        limparInput()
    }

     
function limparInput(){
    document.getElementById("lastName").value = ""
    document.getElementById("firstName").value = ""
    document.getElementById("emailAddress").value = ""
    document.getElementById("messageDescricao").value = ""
}


buttonGetMessage.addEventListener("click", validarCampos)
