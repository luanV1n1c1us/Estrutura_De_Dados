const Read = require("readline-sync");
const chamados = new Array(
    {
        id: 1041,
        status: "Aberto",
        urgencia: "Baixa"
    },
    {
        id: 1042,
        status: "Fechado",
        urgencia: "Média"
    },
    {
        id: 1043,
        status: "Aberto",
        urgencia: "Alta"
    },
);
let callId = Read.question("Insira o id do chamado")
const call = chamados.find((data) => data.id == callId);
console.log("Consultado informações")
console.log(`O id do chamado é: ${call.id} \n Sua urgência é: ${call.urgencia} \n Seu stauts é: ${call.status}`)