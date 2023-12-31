let countPessimo = 0;
let countOtimoBom = 0;
let countMulheres = 0;
let countHomens = 0;
let totalIdade = 0;
let idadeMaisVelha = 0;
let idadeMaisNova = Infinity;

for (let i = 0; i < 45; i++) {
    const idade = parseInt(prompt(`Informe a idade da pessoa ${i + 1}:`));
    const sexo = prompt("Informe o sexo da pessoa ([M] para masculino, [F] para feminino):").toUpperCase();
    const opiniao = parseInt(prompt("Informe a opinião da pessoa ([1] para péssimo, [2] para regular, [3] para bom, [4] para ótimo):"));

    totalIdade += idade;
    idadeMaisVelha = Math.max(idadeMaisVelha, idade);
    idadeMaisNova = Math.min(idadeMaisNova, idade);

    if (opiniao === 1) {
        countPessimo++;
    } else if (opiniao === 3 || opiniao === 4) {
        countOtimoBom++;
    }

    if (sexo === 'M') {
        countHomens++;
    } else if (sexo === 'F') {
        countMulheres++;
    }
}

const mediaIdade = totalIdade / 45;
const porcentagemOtimoBom = (countOtimoBom / 45) * 100;

console.log(`Média de idade: ${mediaIdade.toFixed(2)}`);
console.log(`Idade da pessoa mais velha: ${idadeMaisVelha}`);
console.log(`Idade da pessoa mais nova: ${idadeMaisNova}`);
console.log(`Quantidade de pessoas que responderam péssimo: ${countPessimo}`);
console.log(`Porcentagem de pessoas que responderam ótimo e bom: ${porcentagemOtimoBom.toFixed(2)}%`);
console.log(`Número de mulheres que responderam ao questionário: ${countMulheres}`);
console.log(`Número de homens que responderam ao questionário: ${countHomens}`);
