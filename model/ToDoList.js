import mongoose from 'mongoose'

var taskSchema = new Schema({
  _id: {
    type: String,
  },
  taskName: {
    type: String,
  },
});

module.exports = mongoose.model('Tasks', taskSchema, 'tasks');
