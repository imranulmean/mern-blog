import express from 'express';
import {getNotifications} from  '../controllers/notification.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();
router.get('/getNotifications', verifyToken, getNotifications);

export default router;

