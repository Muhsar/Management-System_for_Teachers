const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  school_id: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  day:{
    type:Number
  },
  month:{
    type:String
  },
  image:{
    type:String
  }
});

const News = mongoose.model('News', NewsSchema);

module.exports = News;
