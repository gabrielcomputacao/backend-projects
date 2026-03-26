const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController.js");

const router = Router();
const peopleController = new PeopleController();

router.get("/people", (req,res) => peopleController.getDataAll(req,res));
router.put("/people/update/:id", (req,res) => peopleController.updateRecord(req,res))
router.delete("/people/delete/:id", (req,res) => peopleController.deleteRecord(req,res)) 
router.post("/people/create", (req,res) => peopleController.createData(req,res))

module.exports = router;
