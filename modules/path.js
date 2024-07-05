const path = require("path");

//Nome do arquivo atual
console.log(path.basename(__filename));

//nome doDiretório atual
console.log(path.dirname(__filename));

//Extensão do arquivo
console.log(path.extname(__filename));

//Criar obejto Path
console.log(path.parse(__filename));

//Juntar caminhos de arquivos
console.log(path.join(__dirname));

console.log(path.join(__dirname, "teste"));
