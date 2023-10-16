const { Category } = require('../models');

const categoryValidation = async (req, res, next) => {
  const { categoryIds } = req.body;
  const category = await Category.findAll();
  const categoriesIds = category.map((cat) => cat.id);
  if (!categoryIds) return next();
  const categoryIdsNotFound = categoryIds.filter((cat) => !categoriesIds.includes(cat));
  if (categoryIdsNotFound.length > 0) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

module.exports = {
  categoryValidation,
};