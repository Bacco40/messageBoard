let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    res.render('form', { title: "Mini Messageboard"})
  });

module.exports = router;