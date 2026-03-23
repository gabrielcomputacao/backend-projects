const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController.js");

const router = Router();
const peopleController = new PeopleController();

router.get("/people", (req,res) => peopleController.getDataAll(req,res));
router.put("/people/update/:id", (req,res) => peopleController.updateRecord(req,res))

module.exports = router;
