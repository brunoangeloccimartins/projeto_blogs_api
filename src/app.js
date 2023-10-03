const express = require('express');
const { loginController, createUserController } = require('./controller/Login.controller');
const userValidation = require('./middlewares/user.validation');

// ...

const app = express();

app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', loginController);
app.post('/user', userValidation, createUserController);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
