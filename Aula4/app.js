// arquivo de teste

const Queue = require("./Queue");


const superMarketQueue = new Queue();

superMarketQueue.enqueue("Marina");
superMarketQueue.enqueue("Felipe");
superMarketQueue.enqueue("Higor");

console.log(superMarketQueue.toString())
console.log(superMarketQueue.dequeue())
console.log(superMarketQueue.toString())
console.log(superMarketQueue.peek())