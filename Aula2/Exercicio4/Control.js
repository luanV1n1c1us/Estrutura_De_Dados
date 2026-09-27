function Control(count, tentativas, liberar) {
    // Caso não receba o parâmetro de tentativas a função tem o default de 3.
    if (liberar) {
        return false;
    } else {
        if (!tentativas) {
            tentativas = 3;
        }
        if ((tentativas - count) == 0) {
            console.log("Tentativas Esgotadas...");
            return false;
        } else {
            console.log("Tente novamente!");
            console.log(`Falha na tentativa! \n Tentativas restantes: ${tentativas - count}`);
            return true
        }
    }
}


module.exports = Control