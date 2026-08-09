import { listarLivrosDisponiveis } from './listarDisponiveis.js';
import { cadastrarLivro } from './cadastrarLivro.js';
import { listarLivros } from './listarLivros.js';
import { buscarLivro } from './buscarLivros.js';
import { realizarEmprestimo } from './realizarEmprestimo.js';
import { realizarDevolucao } from './realizarDevolucao.js';
import { exibirEstatisticas } from './exibirEstatisticas.js';
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
            break;
        default:
            console.log("Opção inválida colocar só o número da opção");
    }
} while (opcion == true);