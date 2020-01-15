var express = require('express');
var router = express.Router();
var axios = require("axios");
// const cheerio = require('cheerio')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/homepage', function(req, res, next) {
  res.render('homepage', { title: 'Express' });
});

router.get("/receipesearch", function (req, res) {
  // Grab the body of the html with axios
  var responsGET;
  console.log('response.data123',res.body)
  axios.get("https://api.spoonacular.com/recipes/search?apiKey=d9bcce0ffe8b40c3a75cc202f206fed9&query=cheese+ham").then(function (response) {
    // Load NPR into cheerio and save it to $ for a shorthand selector
    // var $ = cheerio.load(response.data);

    // console.log('$',$)

    console.log('response.data',req.query)

    // Send a message to the client
    
    responsGET = response.data;
    res.status('200').send(responsGET)

  });
  // console.log('responsGET', responsGET)
  res.status('200')
});
module.exports = router;
