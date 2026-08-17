class Carrinho {
    #list = [];
    #total = 0;

    newItem(product) {
        this.#list.push(product.name);
        this.#total = this.#total + product.value;
    }
    total() {
        console.log(`O total da compra foi de ${this.#total}`)
    }
    showItens() {
        this.#list.forEach((item, index) => {
            console.log(`item ${index + 1}: ${item}`)
        })
    }
}

module.exports = Carrinho