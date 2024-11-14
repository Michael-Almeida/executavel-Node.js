const ConversorService = require("../services/conversaoService");
const promptSync = require("prompt-sync")();

class ConversorController {
  constructor() {
    this.conversaoService = new ConversorService();
  }

  iniciar() {
    console.log("===== Conversor de Temperatura =====");
    console.log("1. Celsius para Fahrenheit");
    console.log("2. Fahrenheit para Celsius");
    console.log("3. Celsius para Kelvin");
    console.log("0. Sair");

    this.menu();
  }

  menu() {
    while (true) {
      const opcao = promptSync("Escolha uma opção:");

      switch (opcao) {
        case "1":
          this.converterCelsiusParaFahrenheit();
          break;
        case "2":
          this.converterFahrenheitParaCelsius();
          break;
        case "3":
          this.converterCelsiusParaKelvin();
          break;
        case "0":
          console.log("Saindo...");
          process.exit(0);
        default:
          console.log("Opção inválida");
      }
    }
  }

  converterCelsiusParaFahrenheit() {
    const celsius = parseFloat(promptSync("Digite a temperatura em Celsius: "));
    const fahrenheit = this.conversaoService.celsiusParaFahreheiht(celsius);
    console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
  }

  converterFahrenheitParaCelsius() {
    const fahrenheit = parseFloat(
      promptSync("Digite a temperatura em Fahrenheit: ")
    );
    const celsius = this.conversaoService.fahrenheitParaCelsius(fahrenheit);
    console.log(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);
  }

  converterCelsiusParaKelvin() {
    const celsius = parseFloat(promptSync("Digite a temperatura em Celsius: "));
    const kelvin = this.conversaoService.celsiusParaKelvin(celsius);
    console.log(`${celsius}°C = ${kelvin.toFixed(2)}K`);
  }
}

module.exports = ConversorController;
