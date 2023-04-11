const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const button = document.getElementById("button");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    check();
});

function check(){
    const usuario = username.value;
    const e_mail = email.value;
    const senha = password.value;
    const senha2 = password2.value;
    if( usuario == ''){
        setErrorFor(username, ' O nome de usuário é obrigatório');
    } else {
        setSuccess(username);
    }
    if(e_mail == ''){
        setErrorFor(email, 'O email é obrigatório');  
    }
    else {
        setSuccess(email);
    }
    if(senha == ''){
        setErrorFor(password, 'A senha é obrigatório');
    }  
    else {
        setSuccess(password);
    }
    if (senha2 == ''){
        setErrorFor(password2, 'A senha tem de ser a mesma e é obrigatória'); 
    } else if (senha != senha2){
        setErrorFor(password2, 'A senha tem de ser a mesma');  
    }
    else {
        setSuccess(password2); 
    }
    const formControles = form.querySelectorAll(".form-control");
    const formIsValid = [...formControles].every((formControl) => {
        return (formControl.className === "form-control success");
    });

    if(formIsValid){
        console.log("O formulário está 100% válido");
    }
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    // adicionar mensagem de erro//
    small.innerText = message;
    //Adicionar classe de erro//
    formControl.className = "form-control error";
}
function setSuccess(input){
    const Control = input.parentElement;
    //adicionar classe de sucesso// 
    Control.className = "form-control success";
}
console.log(check(),setSuccess(), setErrorFor());