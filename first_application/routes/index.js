var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var places = [
  { name: 'Home', rating: 10 },
  { name: 'London', rating: 9 },
  { name: 'San Diego', rating: 5 },
  { name: 'Charleston', rating: 6 },
  { name: 'Virginia Beach', rating: 5 }
  ];
  // create a name
  var myname = "Tiffany Parrott";
  res.render('index', {
  title: 'Favorite Places',
  places: places,
  myname: myname
  });
  });
  module.exports = router;