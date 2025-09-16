import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";

const baseUrl = process.env.API_BASE_URL ?? "http://localhost:5268";

Given("the API base URL is configured", function () {
  expect(baseUrl, "Base URL not provided").to.be.a("string").and.not.empty;
});

When('I GET "{string}"', async function (path) {
  const url = new URL(path, baseUrl).toString();
  this.response = await fetch(url, { headers: { Accept: "application/json" } });
});

Then("the response should be JSON", async function () {
  const text = await this.response.text();
  try {
    this.json = JSON.parse(text);
  } catch (e) {
    throw new Error(`Response was not valid JSON. Body: ${text}`);
  }
});