import express from 'express';
const router = express.Router();
import { createTweet,getTweet } from '../../controllers/tweet-controller.js';
import {toggleLike} from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import {create} from '../../controllers/auth-controller.js'

router.post('/tweets',createTweet);
router.post('/likes/toggle',toggleLike);
router.post('/comment',createComment);
router.get('/tweet/:id',getTweet);
router.post('/signup',create);

export default router;

