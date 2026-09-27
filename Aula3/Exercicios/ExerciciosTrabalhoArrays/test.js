const MyArray = require("../../Array.js")
const Nomes = require("./namesDataBase.js")

const names = new MyArray();
Nomes.forEach((item) => names.add(item));
names.showContent()
names.showDuplicateds()
names.deletDuplicated();
names.showContent();

