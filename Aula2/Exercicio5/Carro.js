class Carro {
    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
    }

    Andar() {
        console.log(`Estou andando de ${this.modelo}...`)
    }
}

module.exports = Carro