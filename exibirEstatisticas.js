const dadosLivros = require('./dadosLivros.js');

module.exports = function exibirEstatisticas() {
    const livros = dadosLivros();
    const totalLivros = livros.length;
    const disponiveis = livros.filter(livro => livro.disponivel).length;
    const indisponiveis = livros.filter(livro => !livro.disponivel).length;
    const totalPaginas = livros.reduce((soma, livro) => soma + (livro.paginas ?? 0), 0);
    const mediaPaginas = totalLivros > 0 ? (totalPaginas / totalLivros).toFixed(2) : 0;

    console.log('------------------------------');
    console.log('Estatísticas da biblioteca:');
    console.log(`Total de livros cadastrados: ${totalLivros}`);
    console.log(`Livros disponíveis: ${disponiveis}`);
    console.log(`Livros indisponíveis: ${indisponiveis}`);
    console.log(`Total de páginas: ${totalPaginas}`);
    console.log(`Média de páginas por livro: ${mediaPaginas}`);
    console.log('------------------------------');
};