import { Router } from 'express';
import { getRatings, getRatingById, createRating, updateRating, deleteRating } from '../controllers/ratingController';
import auth from '../middleware/authMiddleware';

const router = Router();

router.get('/', getRatings);
router.get('/:id', getRatingById);
router.post('/', auth, createRating);
router.put('/:id', auth, updateRating);
router.delete('/:id', auth, deleteRating);

export default router;
