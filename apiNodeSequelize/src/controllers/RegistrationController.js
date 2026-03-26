const RegisrationService = require("../services/RegistrationService.js");
const Controller = require("./Controller.js");
const registrationService = new RegisrationService();

class RegistrationController extends Controller {
  constructor() {
    super(registrationService);
  }
}

module.exports = RegistrationController;
