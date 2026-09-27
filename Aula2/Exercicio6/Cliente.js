class Cliente {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }

    MostrarCliente() {
        console.log(`O cliente: ${this.nome}, mora no endereço: ${this.endereco}`)
    }
}

module.exports = Cliente