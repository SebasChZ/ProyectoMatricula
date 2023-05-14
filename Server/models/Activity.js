const mongoose = require('mongoose');

//create the reply schema
const replySchema = new mongoose.Schema({
  dateTime: {
    type: Date,
    required: false
  },
  authorName: {
    type: String,
    required: false
  },
  reply: {
    type: String,
    required: false
  },
  commentReplingId: {
    type: mongoose.Schema.Types.ObjectId,
    'ref': 'comment',
    required: false
  }
});

const commentSchema = new mongoose.Schema({
    dateTime: {
      type: Date,
      required: true
    },
    authorName: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    authorReply: { 
      type: String,
      required: false
    },
    repliesArray: {
      type: [{ type: replySchema, required: false }],
      default: []
    }
  });

const activitySchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  activityType: {
    type: Object,
    required: true
  },
  week: {
    type: Number,
    required: true
  },
  dateTime: {
    type: Date,
    required: true
  },
  responsibleTeachers: {
    type: [String],
    default: []
  },

  sessionLink: {
    type: String
  },
  poster: {
    type: Object,
    required: true
  },
  status: {
    type: Number,
    required: true,
    default: 0 // 0 pendiente, 1 notificada, 2 cancellada, 3 realizada
  },
  commentsArray: {
    type: [{ type: commentSchema, required: false }],
    required: false,
    default: []
  }
}, { collection: 'activity' });

  
module.exports = mongoose.model('activity', activitySchema);
  

