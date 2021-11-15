const express     = require('express'),
      router      = express.Router();

// Poster un nouveau document
router.get('/', (req, res) => {
  res.render('index', { title: 'Demo Form' });
});

module.exports = router;