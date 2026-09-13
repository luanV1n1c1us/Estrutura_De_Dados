const MyArray = require("../../Array.js");

const taskManager = new MyArray();

taskManager.add("Estudar");
taskManager.add("Limpar a casa");
taskManager.add("Treinar");
taskManager.add("Ler");
taskManager.add("Jogar");

taskManager.remove();
taskManager.showContent();

// Acessando indice fora do range do array;
// O método retorna -1 através da função *indexIsValid*;
let item = taskManager.getItem(5);
console.log(item)

// removendo um item qualquer do array;
// Obs: Mantém a ordem no array de acordo com a quantidade de itens restantes.
taskManager.removeItem("Limpar a casa");
taskManager.showContent();
