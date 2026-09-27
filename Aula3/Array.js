class MyArray {
    // O atributo tamanho tem como função gerenciar e acessar os espaços do meu array.
    #size = 0;
    #structure = [];
    // função que confere o index
    #indexIsValid(index, callBack) {
        if ((index >= 0) && (index < this.#size)) {
            return callBack();
        } else return -1
    };
    #parameterIsValid(data, callBack) {
        if (data) {
            return callBack(data);
        } else throw new Error(`Parâmetro ${data} é inválido.`);
    };

    // Métodos de manipulação do array:
    // add() tem como função adicionar um item ao meu array;

    add(e) {
        this.#structure[this.#size] = e;
        this.#size = this.#size + 1;
    };
    // Mostra o conteúdo no meu array
    showContent() {
        console.table(this.#structure);
    }
    // Edita um elemento que esta numa posição específica do meu Array;
    edit(e, index) {
        return this.#indexIsValid(index, () => {
            let beforeElement = this.#structure[index];
            this.#structure[index] = e;
            return beforeElement;
        });
    };
    // Remove o ultimo valor adicionado e o retorna;
    remove() {
        this.#size = this.#size - 1;
        let beforeElement = this.#structure[this.#size];
        delete this.#structure[this.#size];
        return beforeElement;
    }
    // obtém o valor de um determinado indice do meu array
    getItem(index) {
        return this.#indexIsValid(index, () => this.#structure[index]);
    };
    // obtém o indice de um determinado valor do meu array;
    getIndex(element) {
        return this.#parameterIsValid(element, () => {
            for (let i = 0; i < this.#size; i++) {
                if (this.#structure[i] == element) {
                    return i;
                }
            }
            return -1
        })
    }
    whyIsSize() {
        console.log(this.#size);
    }
    clear() {
        for (let i = 0; i < this.#size; i++) {
            delete this.#structure[i];
        }
    }
    removeItem(e) {
        // Váriavel que irá receber o index que será apagado.
        let index = null;
        // Confere se o valor do usuário é válido e executa uma função solicitada caso seja verdadeiro.
        this.#parameterIsValid(e, () => {
            // Percorre o Array.
            for (let i = 0; i < this.#size; i++) {
                // Confere se o item bate com o valor solicitado pelo usuário.
                if (e == this.#structure[i]) {
                    index = this.getIndex(this.#structure[i])
                    // Convere se o valor do index é válido.
                    if (index >= 0)
                        // Deleta o valor solicitado.
                        delete this.#structure[i];
                }
            }
            //Organizando o arrya após remover o item.
            //Confere se o item foi removido.
            if (index >= 0) {
                // Percorre o Array já alterado.
                for (let i = 0; i < (this.#size - 1); i++) {
                    //
                    if (i > index) {
                        this.#structure[index] = this.#structure[i];
                        index++
                    };
                };
                delete this.#structure[this.#size - 1];
                this.#size -= 1;
            };
            if (!index) throw Error("Valor não encontrado para ser deletado");
        })
    }
    addFirstPosition(e) {
        this.#parameterIsValid(e, () => {
            // Armazena o valor inicial do espaço
            let beforeValue;
            // Armazena o valor da próxima execução
            let afterValue = e;
            // Percorre o Array
            for (let i = 0; i < (this.#size + 1); i++) {
                if (i < this.#size)
                    beforeValue = this.#structure[i];
                this.#structure[i] = afterValue;
                if (i < this.#size)
                    afterValue = beforeValue;
            }
            this.#size += 1;
        })
    };
    // Pega os dados que estão na faixa de index selecionados pelo user;
    getThisItens(initialValue, finalValue) {
        // Confere o primeiro Valor do index
        return this.#indexIsValid(initialValue, () => {
            // Confere o Segundo valor do index, se True, executa a função;
            return this.#indexIsValid(finalValue, () => {
                // Estrutura que recebe o valores selecionados;
                let newStructure = [];
                // Confere se o index está na faixa de valores corretos
                for (let i = 0; i < this.#size; i++) {
                    if ((i >= initialValue) && (i <= (finalValue - 1))) {
                        newStructure.push(this.#structure[i])
                    }
                }
                return newStructure;
            })
        })
    }
};
module.exports = MyArray;


//  D A B C
// 0 1 2
