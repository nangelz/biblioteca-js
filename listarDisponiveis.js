const dadosLivros = require('./dadosLivros.js');

module.exports = function listarLivrosDisponiveis() {
    console.log("Lista de livros disponíveis:");
    dadosLivros().filter(livro => livro.disponivel).forEach((livro, index) => {
        console.log(`index : ${index + 1}. 
            Título: ${livro.titulo},
            Autor: ${livro.autor},
            Categoria: ${livro.categoria},
            Número de páginas: ${livro.paginas},
            Disponibilidade: ${livro.disponivel ? 'Disponível' : 'Indisponível'}`);
    });
}