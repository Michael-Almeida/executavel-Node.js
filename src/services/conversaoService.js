class ConversaoService {
  celsiusParaFahreheiht(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  farenheitParaCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }
  celsiusParaKelvin(celsius) {
    return celsius + 273.15;
  }
}
module.exports = ConversaoService;
