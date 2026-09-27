const ranckedLeads = new Array("Lead A", "Lead B", "Lead C", "Lead D", "Lead E")
const winnerLeads = ranckedLeads.slice(0, 3);
console.log("Os vencedores são os Clientes")
winnerLeads.forEach((data) => {
    console.log(data);
})