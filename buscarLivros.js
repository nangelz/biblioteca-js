const prompt = require('prompt-sync')();
const dadosLivros = require('./dadosLivros.js');

module.exports = function buscarLivro() {
    const title = prompt('Digite o título do livro que deseja buscar: ');
    // Busca el libro por título y luego obtiene su índice con indexOf
    const livroEncontrado = dadosLivros().find(livro => livro.nome.toLowerCase() === title.toLowerCase());
    if (livroEncontrado) {
        const indice = dadosLivros().indexOf(livroEncontrado);
        console.log('-------------------------------');
        console.log('Livro encontrado:');
        console.log(`Índice no array: ${indice}`);
        console.log(`Título: ${livroEncontrado.nome}`);
        console.log(`Autor: ${livroEncontrado.author}`);
        console.log(`Categoria: ${livroEncontrado.category}`);
        console.log(`Número de páginas: ${livroEncontrado.numberOfPages}`);
        console.log(`Disponibilidade: ${livroEncontrado.disponibilidade ? 'Disponível' : 'Indisponível'}`);
    } else {
        console.log('Livro não encontrado.');
    }
    
}