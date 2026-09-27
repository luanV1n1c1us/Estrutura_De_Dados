class Matematica {
    static somar(a, b) {
        return a + b
    }
    static subtrair(a, b) {
        return a - b;
    }
    static fatorial(a) {
        let result = 1;
        let operator;
        for (let i = a; i > 0; i--) {
            operator = i;
            result = result * operator
        }
        return result;
    }
}

module.exports = Matematica;