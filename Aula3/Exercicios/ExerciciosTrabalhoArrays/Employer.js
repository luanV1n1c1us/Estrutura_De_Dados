class Employer {
    #cod = 0
    addEmployer(name, cod) {
        let employer = { name: name, cod: cod ? cod : this.#cod }
        if (!cod)
            this.#cod += 1;
        return employer;
    }
}

module.exports = Employer;