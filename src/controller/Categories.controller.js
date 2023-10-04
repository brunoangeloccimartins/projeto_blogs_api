const { createCategory, getAllCategories } = require('../service/Categories.service');

const createCategoryController = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const newCategory = await createCategory(name);
  res.status(201).json(newCategory);
};

const getAllCategoriesController = async (req, res) => {
  const category = await getAllCategories();
  res.status(200).json(category);
};

module.exports = {
  createCategoryController,
  getAllCategoriesController,
};