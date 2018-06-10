var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Bob\'s Bait and Tackle Shop',
    cards: [
      {
        cardTitle: 'Card One',
        cardBody: 'Boorakacha',
        cardLink: {
          linkLabel: 'To Example One',
          linkHREF: 'http://example.com'
        }
      },
      {
        cardTitle: 'Card Two',
        cardBody: 'Poppalooey',
        cardLink: {
          linkLabel: 'To Example Two',
          linkHREF: 'http://example.com'
        }
      }
    ]
  });
});

module.exports = router;
