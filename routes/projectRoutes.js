// let Project = require('../models/projectModel').Project;

// const uniqid = require('uniqid');
// const express = require('express');
// // we can redirect requests from one file to another
// const router = express.Router();
// const path = require('path');

// const authMiddleware = require('../middleware/auth');

// router.get('/', async (req, res) => {
//   let posts = await Post.find();
//   res.send(posts);
// });
// router.get('/:id', async (req, res) => {
//   let id = req.params.id;
//   let post = await Post.findOne({ id: id });
//   res.send(post);
// });

// router.post('/', authMiddleware, async (req, res) => {
//   let reqBody = req.body;
//   let imgPath;
//   if (reqBody.imageUrl) {
//     imgPath = reqBody.imageUrl;
//   } else {
//     imgPath = req.file.path.substring(
//       req.file.path.indexOf(path.sep),
//       req.file.path.length
//     );
//   }
//   let newPost = new Post({
//     id: uniqid(),
//     title: reqBody.title,
//     date: new Date(),
//     description: reqBody.description,
//     text: reqBody.text,
//     country: reqBody.country,
//     imageAddress: imgPath,
//   });
//   await newPost.save();
//   res.send('Created');
// });

// router.delete('/:id', authMiddleware, async (req, res) => {
//   let id = req.params.id;
//   await Post.deleteOne({ id: id });
//   res.send('Deleted!');
// });

// router.put('/:id', authMiddleware, async (req, res) => {
//   let id = req.params.id;
//   await Post.updateOne({ id: id }, req.body);
//   res.send('Updated!');
// });

// module.exports = router;
