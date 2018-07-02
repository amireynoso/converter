import convert from "convert-units";

class Converter {
  constructor(selector = "#app") {
    this.container = document.querySelector(selector);

    if (!this.container) {
      throw new Error("Converter: inexistent container selector");
    }

    this.bootstrap();
  }
}

export default Converter;
