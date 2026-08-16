const Funcionario = require("./Funcionario");

class Gerente extends Funcionario {

    constructor(nome, bonus) {
        super(nome, bonus)
    }

    calcularBonus() {
        console.log(`O valor a receber do gerente é ${this.salario * this.bonus}`)
    }
}

module.exports = Gerente