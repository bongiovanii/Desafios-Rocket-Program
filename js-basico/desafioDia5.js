const prompt = require("prompt-sync")();

opc = 0;
let usuarios = [];

class Usuario {
  constructor(nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }
}

function carregaUsuario(nome, idade, email) {
  let i = usuarios.length;
  usuarios[i] = new Usuario(nome, idade, email);
  return usuarios[i];
}

function removerUsuario() {
  let emailRemover = prompt("Insira o email do usuário a ser removido: ");

  for (let j = 0; j < usuarios.length; j++) {
    if (usuarios[j].email == emailRemover) {
      delete usuarios[j];
    }
  }
}

while (opc != 9) {
  console.log(
    "¨¨¨¨¨¨¨¨Cadastro de usuário¨¨¨¨¨¨¨¨¨\n1-Adicionar novo usuário\n2-Remover um usuário pelo email\n3-Listar todos os usuários\n9-Sair\n"
  );
  opc = parseInt(prompt("Escolha uma opção: "));

  switch (opc) {
    case 1:
      console.log("------CARREGAR USUARIO NO SISTEMA------\n");
      let nome = prompt("Digite o nome do usuário: ");
      let idade = parseInt(prompt("Digite a idade do usuário: "));
      let email = prompt("Digite o email do usuário: ");

      const user = carregaUsuario(nome, idade, email);
      console.log("Usuário cadastrado");

      break;
    case 2:
      removerUsuario();
      break;
    case 3:
      console.log(usuarios);
      break;
    case 9:
      console.log("Fim do programa");
      break;
    default:
      console.log("Insira um opção válida.");
      break;
  }
}
