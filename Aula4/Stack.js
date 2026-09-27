class Stack {
    // Estrutura que armazena os dados da minha pilha;
    #structure = [];

    //Métodos
    // Adiciona um item na ultima posição
    push(element) {
        this.#structure.push(element);
    }
    // Remove o ultimo elemento adicionado
    pop() {
        if (!this.isEmpity()) {
            this.#structure.pop();
        } else {
            throw new Error("A pilha esta vazia!")
        }


    }
    // Retorna o ultimo elemento adicionado
    peek() {
        if (!this.isEmpity()) {
            let element = this.#structure[this.#structure.length - 1]
            this.#structure.pop()
            return element;
        } else {
            return -1
        }
    }
    // Confere se o array está vazio;
    isEmpity() {
        if (this.#structure.length > 0) {
            return false
        } else {
            if (this.#structure[0] === undefined) {
                return true;
            } else {
                return false;
            }
        }
    }
    // Retorna uma string com toda a estrutura do array;
    toString() {
        return this.#structure
    }
    // Retorna o tamanho do array;
    size() {
        return this.#structure.length;
    }
    // Limpa toda a estrutura de dados da classe;
    clear() {
        this.#structure = [];
    }
    peek() {
        return this.#structure[0]
    }

}

module.exports = Stack;