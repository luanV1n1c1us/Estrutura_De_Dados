const Biblioteca = require('./Biblioteca')
const Livro = require('./Livro')

const title1 = new Livro("A pequena sereia", 'Hans Christian Andersen', 1837)
const title2 = new Livro("Chapeuzinho vermelho", 'Irmãos Grimm', 1888)
const title3 = new Livro('Bela Adormecida', "Irmãos Grimm", 1800)

const Library = new Biblioteca();

Library.addBook(title1)

Library.addBook(title2)

Library.addBook(title3)

Library.listBook()

Library.findBook("Irmãos Grimm")