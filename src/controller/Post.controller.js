const { create } = require('../service/Post.service');
const { createPost } = require('../service/Post.service');

const createPostController = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const post = await createPost(title, content, categoryIds);
  const postId = post.id;
  console.log(postId);
  await create(postId, categoryIds);
  return res.status(201).json(post);
};

module.exports = {
  createPostController,
};