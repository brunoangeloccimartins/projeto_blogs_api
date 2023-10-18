const { BlogPost } = require('../models');

const deleteValidation = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user.id;
  const post = await BlogPost.findByPk(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  if (post.userId !== userId && req.user.role !== 'admin') {
    return res.status(401).json({ message: 'Unauthorized user' }); 
  }
  next();
};

module.exports = {
  deleteValidation,
};
