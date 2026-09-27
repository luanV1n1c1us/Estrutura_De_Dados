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
    // Este método encontra duplicatas no meu array e retorna uma matriz com os index de cada duplicata de cada valor diferente que foi encontrado no meu array;
    isDuplicated() {
        // Armazenamento que recebera o array com a posição de cada duplicata encontrada na estrutura;
        const duplicatageStorageMatriz = [];
        // Itens que foram duplicados serão armazenados aqui para evitar iteração sobre as duplicações destes itens;
        const dontRepitethisItens = [];
        // Iteração que pega o item que será verificado se há duplicatas dele no array;
        for (let i = 0; i < this.#size; i++) {
            // Armazenamento das duplicadas em tempo de execução da iteração;
            let duplicatageStorageExecution = [];
            // Pega o index que será verificado
            let item = this.#structure[i];
            // Pega o index deste item;
            let index = this.getIndex(item);
            // Verifica se o item atual ja foi encontrado suas duplicatas;
            if (!dontRepitethisItens.includes(item))
                // Segunda iteração que faz a verificação do array inteiro
                for (let y = 0; y < this.#size; y++) {
                    // Verifica se o elemento não é o mesmo que já esta no array;
                    if ((!(y == index))) {
                        // Verifica se o elemento é uma duplicata;
                        if (this.#structure[y] == item) {
                            // Adiciona o index da Copia no array de Execução
                            duplicatageStorageExecution.push(y)
                            dontRepitethisItens.push(item);
                        };
                    };
                };
            // Verifica se o array de duplicatas de execução não esta vazio para não adicionarmos arrays vazios na nossa matriz;
            if (duplicatageStorageExecution.length > 0) {
                // Adiciona o array de duplicatas de execução 
                duplicatageStorageMatriz.push(duplicatageStorageExecution)
            };
        };
        // Verifica se a algo para retornar do processo na matriz se tiver retorna a própria matriz, senão retornar -1
        if (duplicatageStorageMatriz.length > 0) {
            return duplicatageStorageMatriz;
        } else return -1;
    };
    showDuplicateds() {
        // Executa a função para procurar duplicatas
        let duplicateds = this.isDuplicated()
        // Verifica se há duplicatas
        if (!(duplicateds == -1)) {
            // Itera sobre a matriz de duplicats
            duplicateds.forEach((item) => {
                console.log(`O item: ${this.#structure.at(item[0])}, esta repetido nas seguintes posições`)
                item.forEach((index) => console.log(index))
            })
        }
    };
    deletDuplicated() {
        // Recebe as duplicatas;
        let duplicateds = this.isDuplicated();
        // Verifica se houve duplicatas 
        if (!(duplicateds == -1)) {
            duplicateds.forEach((duplicatedArray) => duplicatedArray.forEach((index) => delete this.#structure[index]))
        } else console.log("Não houve duplicatas")

    };
};
module.exports = MyArray;


