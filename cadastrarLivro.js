const dadosLivros = require('./dadosLivros.js');
const { Livro } = require('./Livro.js');

module.exports = function cadastrarLivro(title, author, category, numberOfPages, disponibilidade) {
    // Implementation for registering a new book
    const prompt = require('prompt-sync')();
    const newBook = new Livro(title, author, category, numberOfPages, disponibilidade);
    // Here you would typically add the newBook to a collection or database
    title = prompt('Digite o título do livro: ');
    author = prompt('Digite o autor do livro: ');
    category = prompt('Digite a categoria do livro: ');
    numberOfPages = prompt('Digite o número de páginas do livro: ');
    disponibilidade = true; // Assuming new books are available by defaul
    return newBook;

}