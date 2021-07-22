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
  let id = req.params.id;
  await Project.deleteOne({ id: id });
  res.send('Deleted!');
});

router.get('/:id', async (req, res) => {
  let id = req.params.id;
  let project = await Project.findOne({ id: id });
  res.send(project);
});

router.put('/:id', async (req, res) => {
  let id = req.params.id;
  await Project.updateOne({ id: id }, req.body);
  res.send('Updated');
});

module.exports = router;
