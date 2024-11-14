const conversorController = require("./controllers/conversaoController");

function main() {
  const conversor = new conversorController();
  conversor.iniciar();
  try {
  } catch (error) {
    console.error("Erro na aplicção", error);
    process.exit(1);
  }
}
main();
