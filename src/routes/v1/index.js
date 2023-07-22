import express from 'express';
const router = express.Router();
import { createTweet } from '../../controllers/tweet-controller.js';

router.post('/tweets',createTweet);

export default router;

