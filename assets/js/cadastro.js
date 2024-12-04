const btnCadastrar = document.getElementById("cadastrar");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    
    event.preventDefault();

    const emailCadastro = document.getElementById("email").value;
    const senhaCadastro = document.getElementById("password").value;
    const senhaConfirma = document.getElementById("password_confirma").value;

    if (senhaCadastro === senhaConfirma) {

        alert("Cadastro realizado com sucesso !!!");

        localStorage.setItem("emailCadastro", emailCadastro);
        localStorage.setItem("senhaCadastro", senhaConfirma);
        
        window.Location ="../../index.hmtl"

    } else {

        alert("Senhas não conferem !!!");
    }


});