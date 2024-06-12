import { Router } from 'express';
import { getReviews, getReviewById, createReview, updateReview, deleteReview } from '../controllers/reviewController';
import auth from '../middleware/authMiddleware';

const router = Router();

router.get('/', getReviews);
router.get('/:id', getReviewById);
router.post('/', auth, createReview);
router.put('/:id', auth, updateReview);
router.delete('/:id', auth, deleteReview);

export default router;
