import { dadosLivros } from './dadosLivros.js';

export class Livro {
    constructor(title, author, category, numberOfPages, disponibilidade) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.pages = pages;
        this.disponibilidade = disponibilidade;
    }
    livros = dadosLivros.map(livro => new Livro(livro.titulo, livro.autor, livro.categoria, livro.paginas, livro.disponivel));

    #dados = [];

    //get de #itens
    listarLivros() {
        return this.#dados;
    }
}