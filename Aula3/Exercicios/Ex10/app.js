const stock = new Array(
    {
        product: "Teclado",
        amout: 45
    },
    {
        product: "Mouse",
        amout: 12
    },
    {
        product: "Monitor",
        amout: 30
    },
)

stock.sort((beforeValue, afterValue) => {
    return beforeValue.amout - afterValue.amout
})
console.table(stock);