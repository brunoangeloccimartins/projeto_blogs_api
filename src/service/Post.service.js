const { PostCategory } = require('../models');
const { BlogPost } = require('../models');

const create = async (postId, categoryId) => {
  if (!categoryId) return null;
  const categoryMap = categoryId.map((category) => ({ postId, categoryId: category }));
  const postCategory = await PostCategory.bulkCreate(categoryMap);
  return postCategory;
};

const createPost = async (title, content, categoryIds, userId) => {
  const post = await BlogPost.create({ title, content, categoryIds, userId });
  return post;
};

const getAll = async () => {
  const posts = await BlogPost.findAll();
  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findByPk(id);
  return post;
};

module.exports = {
  create, createPost, getAll, getById,
};
