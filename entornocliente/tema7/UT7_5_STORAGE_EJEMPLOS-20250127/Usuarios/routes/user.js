import { Router } from 'express';
import { authenticate } from '../middlewares/auth.js';
import { getAllUsers, profile } from '../controllers/users.js';

const router = Router();

router.get('/allusers', authenticate, getAllUsers);
router.get('/profile', authenticate, profile);

export default router;