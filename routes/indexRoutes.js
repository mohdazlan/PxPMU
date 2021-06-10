const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../controllers/auth');
router.get('/', ensureAuthenticated, (req, res) =>
  res.render('index', {
    name: req.user.name,
    email: req.user.email,
  })
);

router.get('/dashboard', ensureAuthenticated, function (req, res) {
  res.render('dashboard', {
    name: req.user.name,
    email: req.user.email,
    headerTitle: 'EJS Demo Page - Example # 3',
  });
});

// router.get('/dashboard', ensureAuthenticated, (req, res) =>

//   res.render('dashboard', {
//     name: req.user.name,
//     email: req.user.email,
//   })
// );
module.exports = router;
