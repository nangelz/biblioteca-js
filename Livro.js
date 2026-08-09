const dadosLivros = require('./dadosLivros.js');

class Livro {
    constructor(title, author, category, numberOfPages, disponibilidade) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.numberOfPages = numberOfPages;
        this.disponibilidade = disponibilidade;
    }
}

module.exports = { Livro };