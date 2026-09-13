// Recebe valores ao longo da execução
var values;
// Importa a class MyArray;
const MyArray = require("./Array.js");
// Recebe a class 
const Example = new MyArray();
// Adiciona um elemento;
Example.add("1234");
// elemento que será apagado
Example.add("Serei apagado!")
// Mostra o conteúdo no Array;
Example.showContent();
// Edita um conteúdo no meu array;
values = Example.edit("4567", 0);
// O método também retorna o valor que estava ali antes de ser apagado;
console.log(values);
Example.showContent();
// método que remove o ultimo valor do array e o retona;
values = Example.remove();
console.log(values);
Example.showContent();
// Pega um values que está num determinado espaço do meu array;
values = Example.getItem(0);
console.log(values);
// Pega o index de um values do meu array;
values = Example.getIndex("4567");
console.log(values);
// Adiciona o item na primeira posição do meu Array;
Example.addFirstPosition("Acabei de ser adicionado!");
Example.showContent();
// Adicionando novos valor de exemplo;
Example.addFirstPosition(12345);
Example.addFirstPosition(6789);
Example.addFirstPosition(1011121314);
Example.showContent();
// Pegando os valores que desejo no Array;
// Defeito, por ser um método feito pela minha própria classe não consigo instanciar um novo objeto dentro da própria. Isso me obriga a utilizar um vetor nativo, e por consequência não consigo utilizar os métodos do meu vetor próprio. 
values = Example.getThisItens(0, 3);
values.push("Mostrando que este é um Array nativo da linguagem!")
console.table(values);
// Preciso realizar mais atividades então quando puder volto realizando mais dos meu próprios métodos de array.
