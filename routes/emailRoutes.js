let Email = require('../models/emailModel');
const uniqid = require('uniqid');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send(await Email.find());
});

router.post('/', async (req, res) => {
  let reqBody = req.body;
  let newEmail = new Email({
    id: uniqid(),
    name: reqBody.name,
    text: reqBody.text,
    email: reqBody.email,
    date: new Date(),
  });
  await newEmail.save();
  res.send('Accepted');
});

router.delete('/:id', async (req, res) => {
  await Email.deleteOne({ id: req.params.id });
  res.send('Deleted');
});

module.exports = router;
