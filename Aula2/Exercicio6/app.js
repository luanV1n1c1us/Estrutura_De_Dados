const Cliente = require("./Cliente");
const Endereco = require("./Endereco")

const Endereco1 = new Endereco("Centro")
const Cliente1 = new Cliente("Luan", Endereco1.endereco)

Cliente1.MostrarCliente()