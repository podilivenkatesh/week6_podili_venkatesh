import { Request, Response } from 'express';
import { Rating, User, Book } from '../models';

export const getRatings = async (req: Request, res: Response) => {
  try {
    const ratings = await Rating.findAll({ include: [User, Book] });
    res.json(ratings);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const getRatingById = async (req: Request, res: Response) => {
  try {
    const rating = await Rating.findByPk(req.params.id, { include: [User, Book] });
    if (rating) {
      res.json(rating);
    } else {
      res.status(404).json({ error: 'Rating not found' });
    }
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const createRating = async (req: Request, res: Response) => {
  try {
    const rating = await Rating.create({ ...req.body, userId: (req as any).userId });
    res.status(201).json(rating);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateRating = async (req: Request, res: Response) => {
  try {
    const rating = await Rating.findByPk(req.params.id);
    if (rating) {
      await rating.update(req.body);
      res.json(rating);
    } else {
      res.status(404).json({ error: 'Rating not found' });
    }
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteRating = async (req: Request, res: Response) => {
  try {
    const rating = await Rating.findByPk(req.params.id);
    if (rating) {
      await rating.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Rating not found' });
    }
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
