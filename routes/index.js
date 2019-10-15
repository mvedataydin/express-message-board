var express = require('express');
var router = express.Router();

const messages = [
  { text: 'Hi there!', user: 'Amanda', added: new Date().toLocaleString() },
  { text: 'Hello, World!', user: 'Jason', added: new Date().toLocaleString() },
  { text: 'I love open source', user: 'Ash', added: new Date().toLocaleString() },
  { text: 'This is my random message :)', user: 'Vitaly', added: new Date().toLocaleString() },
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini MessageBoard', messages: messages });
});

/* GET /new */
router.get('/new', function (req, res) {
  res.render('form')
})

router.post('/new', function (req, res) {
  let newUser = req.body.name;
  let newMessage = req.body.message;
  messages.push(
    {
      text: newMessage,
      user: newUser,
      added: new Date().toLocaleString()
    }
  )
  res.redirect('/');
})


module.exports = router;
