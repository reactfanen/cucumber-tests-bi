export default {
  default: {
    paths: ["features/**/*.feature"],
    require: ["features/**/*.js"],
    format: ["progress", "html:reports/cucumber.html"],
    worldParameters: {
      baseUrl: process.env.API_BASE_URL
    }
  }
};