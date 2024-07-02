import { Router } from 'express';
import { register, login, logout, getUser } from '../controllers/authController';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/user', getUser);

export default router;
