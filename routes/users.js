var express = require('express');
var router = express.Router();

//THIS IS A SAMPLE ROUTE TO TEST THE CONNECTION BW THE SERVER AND THE CREATE-REACT-APP FRONT END

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  res.json([{
    id: 1,
    username: "samsepi0l"
  }, {
    id: 2,
    username: "D0loresH4ze"
  }]);
});

module.exports = router;