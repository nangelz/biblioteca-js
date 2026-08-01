const dadosLivros = require('./dadosLivros.js');

module.exports = function listarLivrosDisponiveis() {
    console.log("Lista de livros disponíveis:");
    dadosLivros().filter(livro => livro.disponibilidade).forEach((livro, index) => {
        console.log(`index : ${index + 1}. 
            Título: ${livro.nome},
            Autor: ${livro.author},
            Categoria: ${livro.category},
            Número de páginas: ${livro.numberOfPages},
            Disponibilidade: ${livro.disponibilidade ? 'Disponível' : 'Indisponível'}`);
    });
}