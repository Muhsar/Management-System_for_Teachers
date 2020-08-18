const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
   subject:{
       type:String
   },
   student_id:{
       type:String
   },
   term:{
       type:String
   },
   clas:{
       type:String
   },
   school_id:{
       type:String
   },
   remarks:{
       type:String
   },
   grade:{
       type:String
   },
   test:{
       type:Number
   },
   exam:{
       type:Number
   },
   total:{
     type:Number
   }
})

const Result = mongoose.model('Result', ResultSchema);
module.exports = Result;
