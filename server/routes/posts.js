import express from 'express';

import { getPosts, createPost, deletePost, likePost, getPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;