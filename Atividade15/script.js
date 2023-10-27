function validarFormulario() {
    var nome = document.forms["meuForm"].elements["nome"].value;
    var email = document.forms["meuForm"].elements["email"].value;
    var comentario = document.forms["meuForm"].elements["comentario"].value;
    var pesquisa = document.forms["meuForm"].elements["pesquisa"];

    if (nome.length < 10) {
        alert("O nome deve ter no mínimo 10 caracteres.");
        return false;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("O email deve conter '@' e '.'.");
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    var selectedOption = false;
    for (var i = 0; i < pesquisa.length; i++) {
        if (pesquisa[i].checked) {
            selectedOption = true;
            break;
        }
    }

    if (!selectedOption) {
        alert("Você deve selecionar uma opção na pesquisa.");
        return false;
    }

    if (pesquisa[0].checked) {
        alert("Volte sempre a esta página!");

    } else {
        alert("Que bom que você voltou a visitar esta página!");
    }

    return true;
}
