const license = new Array(
    {
        software: "Pacote Office",
        custo: 12200,
        active: true
    },
    {
        software: "Photoshop",
        custo: 13200,
        active: false
    },
    {
        software: "Antivirus",
        custo: 19000,
        active: true
    },
    {
        software: "CRM",
        custo: 12000,
        active: false
    },
)

const totalValue = license.filter((data) => data.active).reduce((acc, values) => acc + values.custo, 0);
console.log(`O valor total de licenças é: ${totalValue} reais.`)