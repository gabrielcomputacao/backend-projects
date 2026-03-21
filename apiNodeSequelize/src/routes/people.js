const { Router } = require("express");
const PeopleController = require("../controllers/peopleController.js");

const router = Router();

router.get("/people", PeopleController.getAllPeople);

module.exports = router;
