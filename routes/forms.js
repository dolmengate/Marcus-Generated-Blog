var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('forms', {
    title: "A website which displays things"
  });
});

router.post('/', function (req, res) {
  console.log('data received');
  res.render('forms', {
    title: 'A website which displays things',
    firstName: req.body.firstname,
      lastName: req.body.lastname,
      addrOne: req.body.address1,
      addrTwo: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      country: req.body.country
  });
});

module.exports = router;
