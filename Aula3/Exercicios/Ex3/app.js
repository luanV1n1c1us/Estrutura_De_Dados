const salario = new Array(2000, 3000, 4000, 5000);
const newSalario = salario.map((data) => {
    let value = data * 0.1;
    return data + value;
})
console.table(newSalario)