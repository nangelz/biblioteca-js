const dadosLivros = require('./dadosLivros.js');

export class Livro {
    constructor(title, author, category, numberOfPages, disponibilidade) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.numberOfPages = numberOfPages;
        this.disponibilidade = disponibilidade;
    }
    livros = dadosLivros.map(livro => new Livro(livro.nome, livro.autor, livro.categoria, livro.numeroDePaginas, livro.disponibilidade));


}