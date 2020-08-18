var mongoose = require('mongoose')
const BillSchema = new mongoose.Schema({
  clas:{
    type:String
  },
  fees:{
    type:Number
  },
  uniform:{
    type:Number
  },
  exerciseBooks:{
    type:Number
  },
  pricePerBook:{
    type:Number
  },
  textBooks:{
    type:Number
  },
  school_id:{
    type:String
  },
  totalTextBookPrice:{
    type:Number
  }
})
const Bill = mongoose.model('Bill', BillSchema);
module.exports = Bill;
