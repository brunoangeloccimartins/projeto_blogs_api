const { create, getAll, getById } = require('../service/Post.service');
const { createPost } = require('../service/Post.service');

const createPostController = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user.id;
  console.log(userId);
  const post = await createPost(title, content, categoryIds, userId);
  const postId = post.id;
  await create(postId, categoryIds);
  return res.status(201).json(post);
};

const getAllPostsController = async (_req, res) => {
  const posts = await getAll();
  return res.status(200).json(posts);
};

const getByIdController = async (req, res) => {
  const { id } = req.params;
  const post = await getById(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(post);
};

module.exports = {
  createPostController, getAllPostsController, getByIdController,
};