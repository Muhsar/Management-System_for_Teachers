const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  name: {
    type: String
  },
 password:{
   type:String
 },
 signup:{
   type:String
 },
  surname: {
    type: String
  },
  clas: {
    type: String
  },


  school_id:{
    type:String
},
  teacher_id:{
    type:String
},
  status:{
    type:String
},

  gender: {
    type: String
  },

  address: {
    type: String
  },

  email: {
    type: String
  },
  number: {
    type: String
  },


  date: {
    type: Date,
    default: Date.now
  }
});

const Teacher = mongoose.model('Teacher', TeacherSchema);

module.exports = Teacher;
