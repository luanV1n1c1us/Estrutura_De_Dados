const dataBase = new Array(
    {
        name: "João",
        nivel: "Junior"
    },
    {
        name: "Ana",
        nivel: "Sênior"
    },
    {
        name: "Carlos",
        nivel: "Pleno"
    },
    {
        name: "Beatriz",
        nivel: "Sênior"
    },
)

const seniorList = dataBase.filter((data) => data.nivel === "Sênior")
console.table(seniorList);