
const prompt = require('prompt-sync')();

const options = [
    "1 - Listar livros",
    "2 - Buscar livro",
    "3 - Listar livros disponiveis",
    "4 - Cadastrar livro",
    "5- Realizar emprestimo",
    "6 - Realizar emprestimo",
    "7 - Exibir estatisticas",
    "0 - Sair"
];

console.log(options);
const opcion = prompt('escolha uma opçao:');


switch (opcion) {
    case "1":
        console.log("Listar livros");
        break;
    case "2":
        console.log("Buscar livro");
        break;
    case "3":
        listarLivrosDisponiveis();
        break;
    case "4":
        console.log("Cadastrar livro");
        break;
    case "5":
        console.log("Realizar emprestimo");
        break;
    case "6":
        console.log("Realizar devolucao");
        break;
    case "7":
        console.log("Exibir estatisticas");
        break;
    case "0":
        console.log("Sair");
        break;
    default:
        console.log("Opção inválida colocar só o número da opção");
}