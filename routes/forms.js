var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('forms', {
    title: "A website which displays things"
  });
});

router.post('/submit', function (req, res) {
  var firstName = req.body.firstname;
  var lastname = req.body.lastname;
});

module.exports = router;
