const read = require("readline-sync")
const Control = require("./Control.js");
const historico = {
    deposito: 0,
    saque: 0,
    consultas: 0,
}
class ContaBancaria {
    #saldo = 0;

    verSaldo() {
        historico.consultas++
        console.log(`O saldo na conta é ${this.#saldo}`)
    }
    Sacar() {
        let controlGlobal;
        let saque = 0;
        let count = 0;
        historico.saque++;
        do {
            console.log("Qual valor você gostaria de sacar?")
            saque = read.questionInt()
            if ((saque < this.#saldo) && (saque > 0)) {
                console.log("Valor sacado com sucesso!!!")
                this.#saldo = this.#saldo - saque
                controlGlobal = Control(0, true, true);
            } else {
                if ((saque < 0) || (saque == 0)) {
                    console.log("O saque tem que ser maior que 0.")
                    contador++
                    controlGlobal = Control(count, 5)
                } else {
                    console.log("O saldo tem que ser maior que o saque.")
                    count++
                    controlGlobal = Control(count, 5)
                }
            }
        } while (controlGlobal)
    }
    Depositar() {
        let controlGlobal;
        let count = 1;
        historico.deposito++
        do {
            console.log("Qual valor você gostaria de depositar?")
            let deposito = read.questionInt()
            if (deposito > 0) {
                console.log("Depositado com sucesso!")
                this.#saldo = this.#saldo + deposito
            } else {
                count++;
                controlGlobal = Control(count, 5)
            }

        } while (controlGlobal)
    }
    Historico() {
        let count = 0;
        let controlGlobal;
        if ((!historico.consultas) && (!historico.saque) && (!historico.deposito)) {
            console.log("Bem - vindo, é sua primeira vez por aqui. Fique a vontade para utilizar nossos serviços!!! ")
            controlGlobal = Control(count, true, true)
        }
        do {
            console.log("O que gostaria de verificar? \n 1 - Saques \n 2 - Depositosa \n 3 - Consultas \n 4 - sair");
            const _switch = read.questionInt();
            switch (_switch) {
                case 1:
                    console.log(`O número de saques é ${historico.saque}`)
                    controlGlobal = Control(count, 3, true)
                    break;
                case 2:
                    console.log(`O número de depositos é ${historico.deposito}`)
                    controlGlobal = Control(count, 3, true)
                    break;
                case 3:
                    console.log(`O número de consultas é ${historico.consultas}`)
                    controlGlobal = Control(count, 3, true)
                    break;
                case 4:
                    controlGlobal = Control(count, 3, true)
                default:
                    console.log("Escolha uma opção válida!")
                    count++
                    controlGlobal = Control(count, 3)
            }
        } while (controlGlobal)

    }
}

module.exports = ContaBancaria