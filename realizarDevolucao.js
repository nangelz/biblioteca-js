const prompt = require('prompt-sync')();
const dadosLivros = require('./dadosLivros.js');
const { Livro } = require('./Livro.js');

module.exports = function realizarDevolucao() {
    const title = prompt('Digite o título do livro que deseja devolver: ');
    const livroEncontrado = dadosLivros().find(livro => livro.titulo.toLowerCase() === title.toLowerCase());

    if (!livroEncontrado) {
        console.log('Livro não encontrado.');
        return;
    }

    if (livroEncontrado.disponivel) {
        console.log('Este livro já está disponível, não é possível devolver.');
        return;
    }

    const devolvido = Livro.devolverLivro(livroEncontrado);
    if (devolvido) {
        console.log('Devolução realizada com sucesso!');
        console.log(`Título: ${livroEncontrado.titulo}`);
        console.log(`Disponibilidade: ${livroEncontrado.disponivel ? 'Disponível' : 'Indisponível'}`);
    } else {
        console.log('Não foi possível realizar a devolução.');
    }
};
