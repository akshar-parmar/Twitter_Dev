import express from 'express';
const router = express.Router();
import { createTweet,getTweet } from '../../controllers/tweet-controller.js';
import {toggleLike} from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import {create,login} from '../../controllers/auth-controller.js'
import { authenticate } from '../../middlewares/authenticate.js';
import { multerUploads} from '../../middlewares/multer.js';

router.post('/tweets',authenticate,multerUploads, createTweet);
router.post('/likes/toggle',authenticate,toggleLike);
router.post('/comment',authenticate, createComment);
router.get('/tweet/:id',getTweet);
router.post('/signup',create);
router.post('/signin',login);


export default router;

