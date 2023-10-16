const { BlogPost } = require('../models');

const updateValidation = async (req, res, next) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = req.user.id;
  const post = await BlogPost.findByPk(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  if (post.userId !== userId) return res.status(401).json({ message: 'Unauthorized user' });
  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  updateValidation,
};