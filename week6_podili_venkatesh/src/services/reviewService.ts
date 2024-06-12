import { Review, User, Book } from '../models';

export const getAllReviews = async () => {
  return Review.findAll({ include: [User, Book] });
};

export const getReviewById = async (id: string) => {
  return Review.findByPk(id, { include: [User, Book] });
};

export const createReview = async (reviewData: any) => {
  return Review.create(reviewData);
};

export const updateReview = async (id: string, reviewData: any) => {
  const review = await Review.findByPk(id);
  if (review) {
    return review.update(reviewData);
  }
  return null;
};

export const deleteReview = async (id: string) => {
  const review = await Review.findByPk(id);
  if (review) {
    await review.destroy();
    return true;
  }
  return false;
};
