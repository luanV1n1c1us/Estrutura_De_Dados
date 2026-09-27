class Deque {
    // Irei construir este utilizando um objeto;
    #structure = {};
    #count = 0;
    #lowerCount = 0;

    isEmpity() {
        return (this.#count - this.#lowerCount) == 0 || (this.#count - this.#lowerCount) == this.#count ? true : false;
    }

    addFront(e) {
        this.#structure[this.#count] = e;
        this.#count++;
    }
    addBack(e) {
        let nextValue;
        let beforeValue;
        let firstExecution = 0;
        if (!this.isEmpity()) {
            for (let i = this.#lowerCount; i < this.#count; i++) {
                if (firstExecution == 0) {
                    nextValue = e;
                    beforeValue = this.#structure[this.#lowerCount];
                    this.#structure[this.#lowerCount] = nextValue;
                    firstExecution++;
                } else {
                    nextValue = this.#structure[i];
                    this.#structure[i] = beforeValue;
                }
            }
            this.#count++
        } else {
            this.#structure[this.#count] = e;
            this.#count++
        }

    }

    size() {
        return (this.#count - 1) - this.#lowerCount;
    }

    removeFront() {
        if (!this.isEmpity()) {
            let value = this.#structure[this.#count - 1];
            delete this.#structure[this.#count - 1];
            this.#count--
            return value;
        } else throw new Error("A estrutura esta vazia, favor adicionar algo antes de remover");
    }
    removeBack() {
        if (!this.isEmpity()) {
            let value = this.#structure[this.#lowerCount];
            delete this.#structure[this.#lowerCount];
            this.#lowerCount++
        } else throw new Error("A estrutura esta vazia, favor adicionar algo antes de remover");
    }
    clear() {
        this.#structure = [];
        this.#lowerCount = 0;
        this.#count = 0;
    }
    toString() {
        let beforeContent;
        let firstExecution = 0;
        if (!this.isEmpity()) {
            for (let i = this.#lowerCount; i < this.#count; i++) {
                if (firstExecution = 0) {
                    beforeContent = `${this.#structure[this.#lowerCount]}`
                    firstExecution++
                } else {
                    beforeContent = `${beforeContent}, ${this.#structure[i]}`
                }

            }
        } else throw new Error("Não a conteúdo para mostrar, por favor adicione algo para ser mostrado.")
    }
    peekFront() {

    }
    peekBack() {

    }

}