import Notification from '../models/notification.model.js';

export const getNotifications= async (req, res, next)=>{
    const notifications= await Notification.find().populate('postId');
    res.status(200).json(notifications);
}