const Carrinho = require('./Carrinho')
const Produto = require('./Produto')

const produto1 = new Produto("carro", 1990)
const produto2 = new Produto("moto", 2000)
const produto3 = new Produto("televisão", 3000)

const Carrinho1 = new Carrinho();

Carrinho1.newItem(produto1)

Carrinho1.newItem(produto2)

Carrinho1.newItem(produto3)

Carrinho1.showItens()

Carrinho1.total()