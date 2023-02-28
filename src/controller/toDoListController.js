const fakeData = require('../fakeData');

const getTasks = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(fakeData.toDoList);
};

const getTaskById = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(fakeData.toDoList.filter((task) => task.id == req.params.id));
};

module.exports = {
  getTasks,
  getTaskById
};
