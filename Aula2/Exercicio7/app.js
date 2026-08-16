const Gerente = require("./Gerente")
const Desenvolvedor = require("./Desenvolvedor")
const Funcionario = require('./Funcionario')

const func1 = new Funcionario("Luan", 0.13)
const Dev = new Desenvolvedor("Luan", 0.2)
const gerente1 = new Gerente('Luan', 0.5)

func1.calcularBonus()
Dev.calcularBonus()
gerente1.calcularBonus()

func1.mostraBonus()
Dev.mostraBonus()
gerente1.mostraBonus()