let format = require('date-fns/format');
let express = require('express');
let router = express.Router();
let routerNew = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: format(new Date(), 'ccc d MMMM u')
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: format(new Date(), 'ccc d MMMM u')
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

router.post('/new', function(req,res,next){ 
  messages.push({text: req.body.messageText, user: req.body.author, added: format(new Date(), 'ccc d MMMM u')});
  res.redirect('/');
})

module.exports = router;
