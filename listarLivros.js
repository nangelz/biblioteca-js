import { dadosLivros } from './dadosLivros.js';

export function listarLivros() {

    console.log("Lista de livros cadastrados:");
    dadosLivros().forEach((livro, index) => {
        console.log(`index : ${index + 1}. 
            Título: ${livro.nome},
            Autor: ${livro.author},
            Categoria: ${livro.category},
            Número de páginas: ${livro.numberOfPages},
            Disponibilidade: ${livro.disponibilidade ? 'Disponível' : 'Indisponível'}`);
    });
    opcion = true;
    return opcion;

}