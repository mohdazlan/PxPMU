let Project = require('../models/projectModel');
const uniqid = require('uniqid');
const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../controllers/auth');
router.get('/', ensureAuthenticated, (req, res) =>
  res.render('admin', {
    name: req.user.name,
    email: req.user.email,
  })
);

router.delete('/:id', async (req, res) => {
  console.log('fuc');
  let id = req.params.id;
  await Project.deleteOne({ id: id });
  res.send('Deleted!');
});

module.exports = router;
