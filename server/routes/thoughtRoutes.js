const express = require("express");
const router = express.Router();
const {
  getThoughts,
  createThought,
  updateThought,
  deleteThought,
} = require("../controllers/thoughtContoller");

router.get("/thoughts", getThoughts);
router.post("/addThought", createThought);
router.put("/updateThought/:id", updateThought);
router.delete("/deleteThought/:id", deleteThought);

module.exports = router;
