const dadosLivros = require('./dadosLivros.js');

module.exports = function listarLivros() {

    console.log("Lista de livros cadastrados:");
    dadosLivros().forEach((livro, index) => {
        console.log(`index : ${index + 1}. 
            Título: ${livro.titulo},
            Autor: ${livro.autor},
            Categoria: ${livro.categoria},
            Número de páginas: ${livro.paginas},
            Disponibilidade: ${livro.disponivel ? 'Disponível' : 'Indisponível'}`);
    });


}