import { Router } from 'express';
import { getBooks, getBookById, createBook, updateBook, deleteBook } from '../controllers/bookController';
import auth from '../middleware/authMiddleware';

const router = Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', auth, createBook);
router.put('/:id', auth, updateBook);
router.delete('/:id', auth, deleteBook);

export default router;
