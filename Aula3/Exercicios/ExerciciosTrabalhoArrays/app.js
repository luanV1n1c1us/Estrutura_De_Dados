// Require da Instância da Classe MyArray e da Classe Employer;
const MyArray = require("../../Array.js");
const Employer = require("./Employer.js");
// Criando uma nova intância da Classe MyArray;
const HumanRecurses = new MyArray();
const employerSources = new Employer();
// Adicionando o nome dos funcionários
HumanRecurses.add(employerSources.addEmployer("João"));
HumanRecurses.add(employerSources.addEmployer("Renato", 1));
HumanRecurses.add(employerSources.addEmployer("Renato"));
// Mostrando Estrutura Atual do meu Array;
HumanRecurses.showContent()
// Obtendo o nome do terceiro funcionário que participou do treinamento;
const thirdTrainee = HumanRecurses.getItem(2);
// Mostrando o nome do funcionário
console.log(thirdTrainee)
// Limpando os dados do meu Array
HumanRecurses.clear()
// Mostrando que não há mais conteúdo
HumanRecurses.showContent();


// Testando os novos métodos que inseridos;
