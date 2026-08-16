const Funcionario = require("./Funcionario");

class Desenvolvedor extends Funcionario {
    constructor(nome, bonus) {
        super(nome, bonus)
    }

    calcularBonus() {
        console.log(`O bônus do desenvolvedor é de ${this.salario - (this.salario * this.bonus)}`)
    }
}

module.exports = Desenvolvedor