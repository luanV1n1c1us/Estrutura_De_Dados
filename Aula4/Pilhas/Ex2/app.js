const Stack = require("../../Stack.js");

const bau = new Stack();

bau.push("pérolas");
bau.push("rubis");
bau.push("ouro");
console.log("Tesouro guardado: ", bau.toString());
bau.pop();
console.log("O ultimo tesouro guardado foi: ", bau.peek());
console.log(`O baú está vazio? ${!bau.isEmpity() ? "Não, tem muitos tesouros aqui." : "Sim, não há nenhum tesouro aqui!"}`)