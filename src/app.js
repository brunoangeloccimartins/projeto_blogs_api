const express = require('express');
const { loginController } = require('./controller/Login.controller');
const { createUserController, getAllUsersController } = require('./controller/User.controller');
const userValidation = require('./middlewares/user.validation');
const { validateToken } = require('./utils/authToken');

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

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
