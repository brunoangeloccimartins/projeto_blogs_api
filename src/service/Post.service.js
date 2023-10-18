const { PostCategory, User, Category } = require('../models');
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
  const posts = await BlogPost.findAll({ include: [
    {
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    },
  ] });
  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, { include: [
    {
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    { model: Category,
      as: 'categories',
      through: { attributes: [] },
    },
  ] });
  return post;
};

const updatePost = async (id, title, content) => {
  const updatedCount = await BlogPost.update({ title, content }, { where: { id } });

  if (updatedCount) {
    return BlogPost.findByPk(id, {
      include: [{ model: User,
        as: 'user',
        attributes: { exclude: ['password'] } },
      { model: Category,
        as: 'categories',
        through: { attributes: [] } }],
    });
  }

  return null;
};

const deletePost = async (id) => {
  const post = await BlogPost.findByPk(id);
  if (!post) return null;
  await PostCategory.destroy({ where: { postId: id } });
  await BlogPost.destroy({ where: { id } });
  return post;
};

module.exports = {
  create, createPost, getAll, getById, updatePost, deletePost,
};
