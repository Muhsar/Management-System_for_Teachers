var mongoose = require('mongoose')
const StudentBillSchema = new mongoose.Schema({
  clas:{
    type:String
  },
  fees:{
    type:Number
  },
  amountPaid:{
    type:Number
  },
  student_id:{
    type:String
  },
  status:{
    type:String
  },
  school_id:{
    type:String
  },
  name:{
    type:String
  },
  surname:{
    type:String
  }
})
const StudentBill = mongoose.model('StudentBill', StudentBillSchema);
module.exports = StudentBill;
