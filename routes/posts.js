// routes/posts.js
const express = require("express");
const { prisma } = require("../app"); // Import the Prisma instance
const router = express.Router();

// GET /posts
router.get("/", async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

// POST /posts
router.post("/", async (req, res) => {
  const { title, content, userId } = req.body;

  const newPost = await prisma.post.create({
    data: {
      title,
      content,
      userId,
    },
  });
  res.json(newPost);
});

module.exports = router;
