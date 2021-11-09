var nome = document.getElementById("txtNome");
var sobrenome = document.getElementById("txtSobreNome");
var loginCad = document.getElementById("txtLoginCad");
var senhaCad = document.getElementById("txtSenhaCad");
var botaoLimpar = document.getElementById("btnLimpar");
var botaoCadastrar = document.getElementById("btnCadastrar");
var botaoEntrar = document.getElementById("btnEntrar");
var loginLogar = document.getElementById("txtLoginLogar");
var senhaLogar = document.getElementById("txtSenhaLogar");
var user = "bcw7@gmail.com";

function enviarFormulario(){
    if (nome.value == ""){
        alert("Digite seu nome");
        resetarCorBorda();
        nome.focus();
        nome.style.border="1px solid red";
        

    } else if (sobrenome.value == ""){
        alert("Digite seu sobrenome");
        resetarCorBorda();
        sobrenome.focus();  
        nome.style.border = "1px solid #ced4da"; 
        sobrenome.style.border = "1px solid red";
        

    } else if (loginCad.value == ""){
        resetarCorBorda();
        alert("Digite seu email");
        loginCad.focus();
        sobrenome.style.border="1px solid #ced4da";
        loginCad.style.border = "1px solid red"; 
                   
        
    } else if (senhaCad.value == ""){
        resetarCorBorda();
        alert("Digite sua senha");
        senhaCad.focus();
        loginCad.style.border="1px solid #ced4da";
        senhaCad.style.border = "1px solid red";
        
    } else if (!loginCad.checkValidity()){
        resetarCorBorda();
        alert("Digite um e-mail válido, utilizando @ !");
        nome.style.border = "1px solid #ced4da"; 
        sobrenome.style.border = "1px solid #ced4da"; 
        senhaCad.style.border = "1px solid #ced4da"; 
        loginCad.style.border = "1px solid red";
        loginCad.focus();
    }
    
    else{
        resetarCorBorda();
        senhaCad.style.border = "1px solid #ced4da";           
        nome.value = "";
        sobrenome.value = "";
        loginCad.value = "";
        senhaCad.value = "";
        loginCad.style.border = "1px solid #ced4da";
        alert("Email enviado com sucesso !");   //Aqui ao invés do alert eu chamar o modal 
      
    }
}

function resetarCorBorda(){
    nome.style.border = "1px solid #ced4da"; 
    sobrenome.style.border = "1px solid #ced4da"; 
    loginCad.style.border = "1px solid #ced4da";
    senhaCad.style.border = "1px solid #ced4da";
    loginLogar.style.border = "1px solid #ced4da";
    senhaLogar.style.border = "1px solid #ced4da";    
}

function mostrarModal(){
    var modalMensagem = document.getElementById("modalCadSucesso");
    modalMensagem.modal('show');
}

function logar(){
    if (loginLogar.value == ""){
        alert("Digite seu usuário");
        loginLogar.focus();
        loginLogar.style.border ="1px solid red";
        senhaLogar.style.border = "1px solid #ced4da";

    } else if(senhaLogar.value == ""){
        alert("Digite sua senha");
        senhaLogar.focus();
        loginLogar.style.border = "1px solid #ced4da";
        senhaLogar.style.border = "1px solid red";    

    } else if (loginLogar.value != user){
        alert("Usuário incorreto !");
        loginLogar.style.border = "1px solid red";
        senhaLogar.style.border = "1px solid #ced4da";
        loginLogar.focus();

    } else if (senhaLogar.value != "123456"){
        alert("Senha incorreta");
        senhaLogar.value = "";
        senhaLogar.focus();
        loginLogar.style.border = "1px solid #ced4da";
        senhaLogar.style.border = "1px solid red";

    } else {
        senhaLogar.style.border = "1px solid #ced4da";
        loginLogar.value = "";
        senhaLogar.value = "";
        alert("Login efetuado com sucesso !");
    }
}