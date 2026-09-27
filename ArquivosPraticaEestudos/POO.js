class comprimento {
    constructor(nome, comprimento) {
        this.nome = nome;
        this.comprimento = comprimento;
    }
    comprimentar() {
        if (this.comprimento == "despedida") {
            console.log(`Adeus, ${this.nome}`);
        } else console.log(`Olá, ${this.nome}`)

    }
}
// O operador new é obrigatório mesmo que não tenha a iniciação de um construtor.
const comprimentar = new comprimento();
comprimentar.comprimentar