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
    type: String,
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
  daysBeforeNotification: {
    type: Number,
    required: true
  },
  remaindersCount: {
    type: Number,
    required: true
  },
  remainders: {
    type: [Date],
    required: false,
    default: []
  },
  remote:{
    type: Boolean,
    required: true
  },
  sessionLink: {
    type: String,
    required: false,
    default: ""
  },
  poster: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true,
    default: 0 // 0 Planeada, 1 Notificada, 2 Cancelada, 3 Realizada
  },
  commentsArray: {
    type: [{ type: commentSchema, required: false }],
    required: false,
    default: []
  },
  //Estos dos campos son los que se usan para la evidencia y las observaciones, ambas dependen del status 
  // La evidencia 3: Status realizada
  //Es tipo objeto porque se puede subir mas de un archivo o más o lo que le de la gana ahí abría que modifcarlo según se requiera
  evidence: {
    type: Object,
    required: false,
    default: {}
  },
  //Las observaciones es cuando se cancela una actividad 2: Status cancelada
  //Es tipo objeto porque se tiene que subir un comentario, y la fecha de cancelación
  //observaciones ya está hecho
  observations: {
    type: {comment: String, date: Date, _id:false},
    required: false,
    default: {}
  },
}, { collection: 'activity' });

  
module.exports = mongoose.model('activity', activitySchema);
  

