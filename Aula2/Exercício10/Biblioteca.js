class Biblioteca {
    #dataBase = [];

    addBook(book) {
        this.#dataBase.push(book)
    }
    listBook() {
        console.log("Bem-vindo a Biblioteca \n Titulos disponíveis: ")
        this.#dataBase.forEach((item) => {
            console.log(item.title)
        })
    }
    findBook(authorSearch) {
        let search = this.#dataBase.filter((book) => book.author == authorSearch)

        console.log(`Resultados da busca: `)
        search.forEach((item, index) => {
            console.log(`Resultado ${index + 1}: ${item.title}`)
        })
    }
}

module.exports = Biblioteca;