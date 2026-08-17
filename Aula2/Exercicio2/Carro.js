
class Car {
    #velocity = 0
    constructor(model, year) {
        this.model = model;
        this.year = year;
    };
    accelerate() {
        this.#velocity = this.#velocity + 10
    }
    nowVelocity() {
        console.log(this.#velocity)
    }
    stop() {
        if (this.#velocity > 0) {
            this.#velocity = this.#velocity - 5;
        } else {
            console.log('O carro já está parado.')
        }
    }
}

module.exports = Car