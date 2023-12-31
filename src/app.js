const express = require('express');
const { loginController } = require('./controller/Login.controller');
const { createUserController,
  getAllUsersController,
  getUserByIdController, 
  deleteUserByIdController } = require('./controller/User.controller');
const userValidation = require('./middlewares/user.validation');
const { validateToken } = require('./utils/authToken');
const { createCategoryController,
  getAllCategoriesController } = require('./controller/Categories.controller');
const { createPostController, getAllPostsController,
  getByIdController, 
  updatePostController, 
  deletePostController } = require('./controller/Post.controller');
const { postValidation } = require('./middlewares/post.validation');
const { categoryValidation } = require('./middlewares/category.validation');
const { updateValidation } = require('./middlewares/update.validation');
const { deleteValidation } = require('./middlewares/delete.validation');

// ...

const app = express();

app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', loginController);
app.post('/user', userValidation, createUserController);
app.get('/user', validateToken, getAllUsersController);
app.get('/user/:id', validateToken, getUserByIdController);
app.post('/categories', validateToken, createCategoryController);
app.get('/categories', validateToken, getAllCategoriesController);
app.post('/post', validateToken, categoryValidation, postValidation, createPostController);
app.get('/post', validateToken, getAllPostsController);
app.get('/post/:id', validateToken, getByIdController);
app.put('/post/:id', validateToken, updateValidation, updatePostController);
app.delete('/post/:id', validateToken, deleteValidation, deletePostController);
app.delete('/user/me', validateToken, deleteUserByIdController);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
