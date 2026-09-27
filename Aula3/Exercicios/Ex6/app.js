const employer = new Array(
    {
        name: "Marcos",
        training: true
    },
    {
        name: "Ana",
        training: false
    },
    {
        name: "Beto",
        training: true
    },
)

if (employer.every((data) => data.training)) {
    console.log("Todos os funcionários estão treinados")
} else {
    console.log("Algum(s) funcionários ainda está(am) em treinamenamento")
    const emploeyrTraining = employer.filter((data) => !data.training)
    emploeyrTraining.forEach((data) => {
        console.log(`O funcionário ${data.name} ainda está treinando`);
    })
}