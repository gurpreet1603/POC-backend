const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
      },
      email: {
        type: String,
      },
      gender: {
        type: String,
      },
      city: {
        type: String,
      },
      bio: {
        type: String,
      },
});
const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee