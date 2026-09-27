const Animal = require("./Animal.js")
class Gato extends Animal {
    falar() {
        console.log("Miau! Miau!")
    }
}

module.exports = Gato;