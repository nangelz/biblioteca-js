const prompt = require('prompt-sync')();
const dadosLivros = require('./dadosLivros.js');
const { Livro } = require('./Livro.js');

module.exports = function realizarEmprestimo() {
    const title = prompt('Digite o título do livro que deseja emprestar: ');
    const livroEncontrado = dadosLivros().find(livro => livro.nome.toLowerCase() === title.toLowerCase());

    if (!livroEncontrado) {
        console.log('Livro não encontrado.');
        return;
    }

    if (!livroEncontrado.disponibilidade) {
        console.log('Livro já está emprestado.');
        return;
    }

    const emprestado = Livro.emprestarLivro(livroEncontrado);
    if (emprestado) {
        console.log('Empréstimo realizado com sucesso!');
        console.log(`Título: ${livroEncontrado.nome}`);
        console.log(`Disponibilidade: ${livroEncontrado.disponibilidade ? 'Disponível' : 'Indisponível'}`);
    } else {
        console.log('Não foi possível realizar o empréstimo.');
    }
};