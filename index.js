const listarLivrosDisponiveis = require('./listarDisponiveis.js');
const cadastrarLivro = require('./cadastrarLivro.js');
const listarLivros = require('./listarLivros.js');
const buscarLivro = require('./buscarLivros.js');
const realizarEmprestimo = require('./realizarEmprestimo.js');
const realizarDevolucao = require('./realizarDevolucao.js');
const exibirEstatisticas = require('./exibirEstatisticas.js');
const prompt = require('prompt-sync')();

option = true;

do {

    const options = [
        "(1) - Listar livros",
        "(2) - Buscar livro",
        "(3) - Listar livros disponiveis",
        "(4) - Cadastrar livro",
        "(5) - Realizar emprestimo",
        "(6) - Realizar devolucao",
        "(7) - Exibir estatisticas",
        "(0) - Sair"
    ];

    console.log('------------------------------');
    console.log('Sistema de Bibliotecas');
    console.log('------------------------------');
    console.log(options);
    let opcion = prompt('escolha uma opçao:');

    switch (opcion) {
        case "1":
            listarLivros();
            break;
        case "2":
            buscarLivro();
            break;
        case "3":
            listarLivrosDisponiveis();
            break;
        case "4":
            cadastrarLivro();
            break;
        case "5":
            realizarEmprestimo();
            break;
        case "6":
            realizarDevolucao();
            break;
        case "7":
            exibirEstatisticas();
            break;
        case "0":
            console.log("Sair");
            opcion = false;
            return opcion;
            break;
        default:
            console.log("Opção inválida colocar só o número da opção");
    }
} while (opcion == true);