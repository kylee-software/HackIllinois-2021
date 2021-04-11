const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  text: {
    type: String,
    required: true
  },
  photo: {
    data: Buffer,
    contentType: String
  },
  messageId: {
    type: String
  }
});

module.exports = Post = mongoose.model("posts", PostSchema);