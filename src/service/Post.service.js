const { PostCategory } = require('../models');
const { BlogPost } = require('../models');

const create = async (postId, categoryId) => {
  if (!categoryId) return null;
  const categoryMap = categoryId.map((category) => ({ postId, categoryId: category }));
  const postCategory = await PostCategory.bulkCreate(categoryMap);
  return postCategory;
};

const createPost = async (title, content, categoryIds) => {
  const post = await BlogPost.create({ title, content, categoryIds });
  return post;
};

module.exports = {
  create, createPost,
};
