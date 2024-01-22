import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema(
  {
    firstUserId: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "User",
    },
    secUserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    postId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Post"
    },
    commentId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Comment"
    },
    notifyAll:{
      type: Boolean,
      default: false,      
    }
  },
  { timestamps: true }
);

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;
