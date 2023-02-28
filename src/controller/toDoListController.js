const fakeData = require("../fakeData");

// Get all
const getTasks = async (req, res) => {
  res.json(fakeData.toDoList)
};

module.exports = {
  getTasks
}
