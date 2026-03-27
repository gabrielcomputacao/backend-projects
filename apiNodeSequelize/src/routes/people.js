const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController.js");
const RegistrationController = require("../controllers/RegistrationController.js");

const router = Router();
const peopleController = new PeopleController();
const registrtionController = new RegistrationController();

router.get("/people", (req,res) => peopleController.getDataAll(req,res));
router.put("/people/update/:id", (req,res) => peopleController.updateRecord(req,res))
router.delete("/people/delete/:id", (req,res) => peopleController.deleteRecord(req,res)) 
router.post("/people/create", (req,res) => peopleController.createData(req,res))
router.get("/people/:personId/registration", (req,res) => peopleController.getRegistrations(req,res))
router.post("/people/:personId/registration", (req,res) => registrtionController.createData(req,res))

module.exports = router;
