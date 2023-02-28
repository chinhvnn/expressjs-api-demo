const express = require('express');
const { getTasks } = require('../controller/toDoListController');

const router = express.Router();

const apiV1Router = (app) => {
  router.get('/', getTasks);
  router.get('/hello', (req, res) => res.send('Hello'));

  return app.use('/api/v1', router);
};

module.exports = apiV1Router;
