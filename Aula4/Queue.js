// Classe de fila, estrutura de dados que se utiliza do principiop FiFo, diferente da Stack que utiliza o princípio LiFo;
class Queue {
    #structure = [];

    enqueue(element) {
        this.#structure.push(element);
    }
    dequeue() {
        if (!this.isEmpity()) {
            let value = this.#structure[0];
            this.#structure.shift();
            return value;
        }
    }
    isEmpity() {
        if (this.#structure[0] === undefined) {
            return true;
        } else return false;
    }
    size() {
        return this.#structure.length;
    }
    toString() {
        return this.#structure.toString();
    }
    peek() {
        if (!this.isEmpity()) {
            return this.#structure[0]
        } else return undefined
    }
    clear() {
        this.#structure = []
    }
}

module.exports = Queue;