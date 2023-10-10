const { PostCategory } = require('../models');
const { BlogPost } = require('../models');

const create = async (postId, categoryId) => {
  const postCategory = await PostCategory.create({ postId, categoryId });
  return postCategory;
};

const createPost = async (title, content, categoryIds) => {
  const post = await BlogPost.create({ title, content, categoryIds });
  return post;
};

module.exports = {
  create, createPost,
};
