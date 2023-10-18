function calcularMaiorEOrdenarCrescente(n1, n2, n3) {
    const arr = [n1, n2, n3];
    
    const maior = Math.max(...arr); // Encontra o maior número
    const ordenado = arr.slice().sort((a, b) => a - b); // Cria uma cópia ordenada da matriz original

    return { maior, ordenado };
}

const { maior, ordenado } = calcularMaiorEOrdenarCrescente(6, 1, 5);
console.log('Maior número: ${maior}');
console.log('Ordenado em ordem crescente: ${ordenado}');
