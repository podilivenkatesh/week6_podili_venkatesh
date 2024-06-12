import { Router } from 'express';
import { register, login, getUsers, getUserById, updateUser, deleteUser } from '../controllers/authController';
import auth from '../middleware/authMiddleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', auth, getUsers);
router.get('/:id', auth, getUserById);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);

export default router;
