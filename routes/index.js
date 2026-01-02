var express = require("express");
var router = express.Router();
var axios = require("axios");
// const cheerio = require('cheerio')
/* GET home page. */
router.get("/", (req, res, next) => {
	res.render("index", { title: "Express" });
});
router.get("/homepage", (req, res, next) => {
	res.render("homepage", { title: "Express" });
});

router.get("/receipesearch", (req, res) => {
	// Grab the body of the html with axios
	const apiKey =
		process.env.SPOONACULAR_API_KEY;
	const query = req.query.query || "cheese+ham";

	console.log("Recipe search query:", query);

	axios
		.get(
			`https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${query}`,
		)
		.then((response) => {
			console.log("API response received");
			res.status(200).json(response.data);
		})
		.catch((error) => {
			console.error("API error:", error.message);
			res.status(500).json({ error: "Failed to fetch recipes" });
		});
});
module.exports = router;
