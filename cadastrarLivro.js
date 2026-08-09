const dadosLivros = require('./dadosLivros.js');
const { Livro } = require('./Livro.js');

module.exports = function cadastrarLivro() {
    const prompt = require('prompt-sync')();

    const title = prompt('Digite o título do livro: ');
    const author = prompt('Digite o autor do livro: ');
    const category = prompt('Digite a categoria do livro: ');
    const numberOfPages = parseInt(prompt('Digite o número de páginas do livro: '), 10);
    const disponibilidade = true;

    const newBook = new Livro(title, author, category, numberOfPages, disponibilidade);
    dadosLivros().push({
        nome: newBook.title,
        author: newBook.author,
        category: newBook.category,
        numberOfPages: newBook.numberOfPages,
        disponibilidade: newBook.disponibilidade
    });

    console.log('Livro cadastrado com sucesso!');
    return newBook;
};