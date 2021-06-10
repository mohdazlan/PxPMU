const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../controllers/auth');
router.get('/', ensureAuthenticated, (req, res) =>
  res.render('admin', {
    name: req.user.name,
    email: req.user.email,
  })
);

module.exports = router;
