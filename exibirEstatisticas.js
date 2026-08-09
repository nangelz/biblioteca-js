const dadosLivros = require('./dadosLivros.js');

module.exports = function exibirEstatisticas() {
    const livros = dadosLivros();
    const totalLivros = livros.length;
    const disponiveis = livros.filter(livro => livro.disponivel).length;
    const indisponiveis = livros.filter(livro => !livro.disponivel).length;

    console.log('------------------------------');
    console.log('Estatísticas da biblioteca:');
    console.log(`Total de livros cadastrados: ${totalLivros}`);
    console.log(`Livros disponíveis: ${disponiveis}`);
    console.log(`Livros indisponíveis: ${indisponiveis}`);
    console.log('------------------------------');
};