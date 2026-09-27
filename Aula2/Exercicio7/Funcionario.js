class Funcionario {
    salario = 1000

    constructor(nome, bonus) {
        this.nome = nome;
        this.bonus = bonus;
    }

    calcularBonus() {
        console.log(`O bônus do desenvolvedor é de ${this.salario - (this.salario * this.bonus)}`)
    }

    mostraBonus() {
        console.log(`O valor do bônus do funcionário é ${this.bonus}`)
    }
}

module.exports = Funcionario;