class Pessoa {
    // Utilizando sintaxe resumida...

    constructor(name, yersOld) {
        this.name = name;
        this.yersOld = yersOld

    };
    apresentar() {
        // validação para impedir inserção de dados errados
        if ((typeof (this.name) === "string") && (typeof (this.yersOld) === "number")) {
            console.log(`Olá, me chamo ${this.name} e tenho ${this.yersOld} ano de idade.`)
        }
    }
};
// Exportando a classe que eu
module.exports = Pessoa;