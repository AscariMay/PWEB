function calcularMedia() {
    // Obter os valores das notas e do nome do aluno
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    // Calcular a média aritmética
    var media = (nota1 + nota2 + nota3) / 3;

    // Exibir a média na página
    document.getElementById("resultado").textContent = nome + " tem uma média de " + media.toFixed(2);
}