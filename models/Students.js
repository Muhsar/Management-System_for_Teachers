const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String
  },
  
  surname: {
    type: String
  },
  clas: {
    type: String
  },
  type: {
    type: String
  },
  status:{
    type:String
},
 
  school_id:{
    type:String
},
  student_id:{
    type:String
},
  age: {
    type: Number
  },
  department: {
    type: String
  },
  gender: {
    type: String
  },
  religion: {
    type: String
  },
  sog: {
    type: String
  },
  lga: {
    type: String
  },
  address: {
    type: String
  },
  pname: {
    type: String
  },
  psurname: {
    type: String
  },
  email: {
    type: String
  },
  number: {
    type: String
  },
  paddress: {
    type: String
  },
  number: {
    type: Number
  },
  month: {
    type: Number
  },
  day: {
    type: Number
  },
  year: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
