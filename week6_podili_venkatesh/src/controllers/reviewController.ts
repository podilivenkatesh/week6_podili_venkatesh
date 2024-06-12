import { Request, Response } from 'express';
import { Review, User, Book } from '../models';

export const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.findAll({ include: [User, Book] });
    res.json(reviews);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const getReviewById = async (req: Request, res: Response) => {
  try {
    const review = await Review.findByPk(req.params.id, { include: [User, Book] });
    if (review) {
      res.json(review);
    } else {
      res.status(404).json({ error: 'Review not found' });
    }
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const createReview = async (req: Request, res: Response) => {
  try {
    const review = await Review.create({ ...req.body, userId: (req as any).userId });
    res.status(201).json(review);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateReview = async (req: Request, res: Response) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (review) {
      await review.update(req.body);
      res.json(review);
    } else {
      res.status(404).json({ error: 'Review not found' });
    }
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (review) {
      await review.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Review not found' });
    }
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
