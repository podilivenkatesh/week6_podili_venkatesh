import { Rating, User, Book } from '../models';

export const getAllRatings = async () => {
  return Rating.findAll({ include: [User, Book] });
};

export const getRatingById = async (id: string) => {
  return Rating.findByPk(id, { include: [User, Book] });
};

export const createRating = async (ratingData: any) => {
  return Rating.create(ratingData);
};

export const updateRating = async (id: string, ratingData: any) => {
  const rating = await Rating.findByPk(id);
  if (rating) {
    return rating.update(ratingData);
  }
  return null;
};

export const deleteRating = async (id: string) => {
  const rating = await Rating.findByPk(id);
  if (rating) {
    await rating.destroy();
    return true;
  }
  return false;
};
