const Stack = require("../../Stack.js");
const debbug = []
const spellBooks = new Stack();

spellBooks.push("Metamorfismo");
spellBooks.push("Criaturas Mágicas");
spellBooks.push("Defesa contra as artes das trevas");
console.log(`Esta é a pilha atual: ${spellBooks.toString()}`);
spellBooks.pop();
console.log(`O Livro que está no topo é o: ${spellBooks.peek()}`);
console.log(`Ainda há livros na pilha? ${!spellBooks.isEmpity() ? "\n Sim, ainda há Livros" : "\n Não, a pilha esta vazia."}`)
