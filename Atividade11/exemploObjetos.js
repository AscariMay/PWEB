//usando Object
var aluno1 = new Object();
aluno1.ra = "00001234";
aluno1.nome = "Ken";
alert("ra=" + aluno1.ra + " nome=" + aluno1.nome);

// usando {}
var aluno2 = {};
aluno2.ra = "1234";
aluno2["nome"] = "Mayara";
//aluno2.nome="Mayara"
alert("ra=" + aluno2.ra + " nome=" + aluno2.nome);

//literal
var aluno3 = {
    ra: "1234567",
    nome: "Gabriel"
};
alert("ra=" + aluno3.ra + " nome=" + aluno3.nome);

// usando função constrututora
function Aluno(ra, nome) {
    this.ra = ra;
    this.nome = nome;

    this.MostraDados = function () {
        return "ra=" + this.ra + " nome=" + this.nome;
    }
}
    var aluno4 = new Aluno("123", "Carlos");
    alert(aluno4.MostraDados());
    alert(aluno4.nome);   
