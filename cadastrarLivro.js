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
    const livros = dadosLivros();
    livros.push({
        titulo: newBook.titulo,
        autor: newBook.autor,
        categoria: newBook.categoria,
        paginas: newBook.paginas,
        disponivel: newBook.disponivel
    });

    console.log('Livro cadastrado com sucesso!');
    return newBook;
};