const dadosLivros = require('./dadosLivros.js');

class Livro {
    constructor(title, author, category, numberOfPages, disponibilidade) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.numberOfPages = numberOfPages;
        this.disponibilidade = disponibilidade;
    }

    emprestar() {
        this.disponibilidade = false;
    }

    devolver() {
        this.disponibilidade = true;
    }

    static emprestarLivro(livro) {
        if (livro && livro.disponibilidade) {
            livro.disponibilidade = false;
            return true;
        }
        return false;
    }

    static devolverLivro(livro) {
        if (livro && !livro.disponibilidade) {
            livro.disponibilidade = true;
            return true;
        }
        return false;
    }
}

module.exports = { Livro }; 