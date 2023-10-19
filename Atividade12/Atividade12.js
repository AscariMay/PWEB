// TRIANGULO
class Triangulo {
    constructor(altura, base) {
        this.altura = altura;
        this.base = base;
    }

    calculaArea() {
        return (this.altura * this.base) / 2;
    }
}
objTriangulo = new Triangulo(5, 22);
alert(objTriangulo.calculaArea());


// Conta
class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this.nomeCorrentista = nomeCorrentista;
        this.banco = banco;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    getSaldo() {
        return this.saldo;
    }
    setSaldo(novoSaldo) {
        this.saldo = novoSaldo;
    }
}

class ContaCorrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.saldoEspecial = saldoEspecial;
    }

    getSaldoEspecial() {
        return this.saldoEspecial;
    }
    setSaldoEspecial(novoSaldoEspecial) {
        this.saldoEspecial = novoSaldoEspecial;
    }
}

class ContaPoupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }

    getJuros() {
        return this.juros;
    }
    setJuros(valorJuros) {
        this.juros = valorJuros;
    }

    getDataVencimento() {
        return this.dataVencimento;
    }
    setDataVencimento(novaData) {
        this.dataVencimento = novaData;
    }
}

const contaCorrente = new ContaCorrente("Yumi", "Itau", "123456-9", 1000, 5000);
alert("Nome: " + contaCorrente.nomeCorrentista +
    " | Banco: " + contaCorrente.banco +
    " | Numero Conta: " + contaCorrente.numeroConta +
    " | Saldo: " + contaCorrente.getSaldo() +
    " | Saldo Especial: " + contaCorrente.getSaldoEspecial());

const contaPoupanca = new ContaPoupanca("Maria", "Santander", "22222-7", 100, 0.15, "10-18-2025");
alert("Nome: " + contaPoupanca.nomeCorrentista +
    " | Banco: " + contaPoupanca.banco +
    " | Numero Conta: " + contaPoupanca.numeroConta +
    " | Saldo: " + contaPoupanca.getSaldo() +
    " | Juros: " + contaPoupanca.getJuros() +
    " | Data Vencimento: " + contaPoupanca.getDataVencimento());
