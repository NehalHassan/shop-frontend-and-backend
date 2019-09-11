const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  name: String
})

module.exports = mongoose.model('Department', departmentSchema);