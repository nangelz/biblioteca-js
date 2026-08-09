const dadosLivros = require('./dadosLivros.js');

class Livro {
    constructor(title, author, category, numberOfPages, disponibilidade) {
        this.titulo = title;
        this.autor = author;
        this.categoria = category;
        this.paginas = numberOfPages;
        this.disponivel = disponibilidade;

        this.title = title;
        this.author = author;
        this.category = category;
        this.numberOfPages = numberOfPages;
        this.disponibilidade = disponibilidade;
    }

    emprestar() {
        this.disponivel = false;
        this.disponibilidade = false;
    }

    devolver() {
        this.disponivel = true;
        this.disponibilidade = true;
    }

    static getDisponibilidade(livro) {
        if (!livro) {
            return undefined;
        }

        return livro.disponivel ?? livro.disponibilidade;
    }

    static setDisponibilidade(livro, valor) {
        if (!livro) {
            return false;
        }

        livro.disponivel = valor;
        livro.disponibilidade = valor;
        return true;
    }

    static emprestarLivro(livro) {
        if (livro && Livro.getDisponibilidade(livro)) {
            Livro.setDisponibilidade(livro, false);
            return true;
        }
        return false;
    }

    static devolverLivro(livro) {
        if (livro && !Livro.getDisponibilidade(livro)) {
            Livro.setDisponibilidade(livro, true);
            return true;
        }
        return false;
    }
}

module.exports = { Livro }; 