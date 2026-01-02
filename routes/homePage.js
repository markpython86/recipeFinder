var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/homepage", (req, res, next) => {
	res.render("homepage", { title: "Express" });
});

module.exports = router;
