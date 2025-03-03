const fs = require("fs");
const path = require("path");

//Criar uma pasta

//fs.mkdir(path.join(__dirname, "teste"), (error) => {
//  if (error) {
//    return console.log("Erro: ", error);
//  }
//  console.log("Pasta criada com sucesso");
//});

//Criar um arquivo
fs.writeFile(
  path.join(__dirname, "teste", "teste.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("erro:", error);
    }
    console.log("arquivo criado com sucesso");
  }
);

//Adicionar a um arquivo
fs.appendFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "hello world!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo modificado.");
  }
);

//Ler arquivo
fs.readFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log(data);
  }
);
