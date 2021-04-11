const express = require("express");
const router = express.Router();
const getCounter = require("../helpers/counter");
const formidable = require("formidable");

// Load User model
const User = require("../models/User");

// Load Post model
const Post = require("../models/Post");

// Load getErrorMessage
const getErrorMessage = require("../helpers/dbErrorHandler");

// @route POST posts/createPost
// @desc Register user
// @access Public
router.post("/createPost", (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded"
      })
    }

    const newPost = new Post({
        email: req.body.email,
        text: req.body.content,
        text: req.body.text,
        messageId: "0"
    });

    if(files.photo){
      newPost.photo.data = fs.readFileSync(files.photo.path)
      newPost.photo.contentType = files.photo.type
    }

    newPost.messageId = getCounter;

    try {
      let result = await newPost.save()
      res.json(result)
    }catch (err){
      return res.status(400).json({
        error: getErrorMessage(err)
        });
      }
    });
});

router.get("/allPosts", (req, res) => {
    Post.find({}, function (err, posts) {
        res.send(users);
    })
});
