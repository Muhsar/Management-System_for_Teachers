const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  sender_id: {
    type: String
  },
  name: {
    type: String
  },
  message: {
    type: String
  },
  school_id: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;
