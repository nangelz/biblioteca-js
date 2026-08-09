const prompt = require('prompt-sync')();
const dadosLivros = require('./dadosLivros.js');

module.exports = function buscarLivro() {
    const title = prompt('Digite o título do livro que deseja buscar: ');
    const livroEncontrado = dadosLivros().find(livro => livro.titulo.toLowerCase() === title.toLowerCase());

    if (livroEncontrado) {
        const indice = dadosLivros().indexOf(livroEncontrado);
        console.log('-------------------------------');
        console.log('Livro encontrado:');
        console.log(`Índice no array: ${indice}`);
        console.log(`Título: ${livroEncontrado.titulo}`);
        console.log(`Autor: ${livroEncontrado.autor}`);
        console.log(`Categoria: ${livroEncontrado.categoria}`);
        console.log(`Número de páginas: ${livroEncontrado.paginas}`);
        console.log(`Disponibilidade: ${livroEncontrado.disponivel ? 'Disponível' : 'Indisponível'}`);
    } else {
        console.log('Livro não encontrado.');
    }
}