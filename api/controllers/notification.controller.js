import Notification from '../models/notification.model.js';

export const getNotifications= async (req, res, next)=>{
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;

    const notifications= await Notification.find().populate('secUserId')
    .sort({createdAt:-1})
    .skip(startIndex)
    .limit(limit);
    res.status(200).json(notifications);
}