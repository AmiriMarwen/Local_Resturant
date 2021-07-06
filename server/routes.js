const express = require("express");
const bodyParser = require('body-parser').json();
const router = express.Router();
const Food = require("./models/food");


// Get all posts
router.get("/foods", async (req, res) => {
	const foods = await Food.find()
	res.send(foods)
});

router.post("/foods", async (req, res) => {
  try {
    const food = new Food({
      name: req.body.name,
    	price: req.body.price,
    	dileveryCoast: req.body.dileveryCoast,
    	number: req.body.number,
    })
    await food.save()
    res.status(200).send(food)
  } catch (error) {
    console.log(error);
  }
});


router.get("/foods/:id", async (req, res) => {
	const food = await Food.findOne({ _id: req.params.id })
	res.send(food)
})


module.exports = router ;
