import { setWorldConstructor } from "@cucumber/cucumber";

class CustomWorld {
  constructor(options) {
    this.parameters = options.parameters || {};
    this.baseUrl = this.parameters.baseUrl;
    this.response = null;
    this.json = null;
  }
}

setWorldConstructor(CustomWorld);