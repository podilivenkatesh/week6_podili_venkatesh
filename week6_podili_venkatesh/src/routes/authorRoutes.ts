import { Router } from 'express';
import { getAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } from '../controllers/authorController';
import auth from '../middleware/authMiddleware';

const router = Router();

router.get('/', getAuthors);
router.get('/:id', getAuthorById);
router.post('/', auth, createAuthor);
router.put('/:id', auth, updateAuthor);
router.delete('/:id', auth, deleteAuthor);

export default router;
