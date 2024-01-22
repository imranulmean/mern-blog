import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema(
  {
    userId: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "User",
    },
    notificationMessage: {
      type: String,
    },
    commentor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
  },
  { timestamps: true }
);

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;
