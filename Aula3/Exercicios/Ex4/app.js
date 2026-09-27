const allSale = new Array(123, 456, 789, 1011, 1213, 1415, 11617);
const totalSale = allSale.reduce((acc, total) => acc + total, 0);
console.log("O valor total da venda é ", totalSale);