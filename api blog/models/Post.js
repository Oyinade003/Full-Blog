const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: false,
    },
    author: {
      type: String,
      required: true,
    },
    reading_time: {
      type: Number,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    read_count: {
      type: Number,
      required: true,
  },
},
  {
    timestamps: true,
  } 
);

module.exports = mongoose.model("Blog", BlogSchema);