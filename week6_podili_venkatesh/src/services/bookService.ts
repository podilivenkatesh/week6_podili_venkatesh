import { Book, Author, Review, Rating } from '../models';

export const getAllBooks = async () => {
  return Book.findAll({ include: [Author, Review, Rating] });
};

export const getBookById = async (id: string) => {
  return Book.findByPk(id, { include: [Author, Review, Rating] });
};

export const createBook = async (bookData: any) => {
  return Book.create(bookData);
};

export const updateBook = async (id: string, bookData: any) => {
  const book = await Book.findByPk(id);
  if (book) {
    return book.update(bookData);
  }
  return null;
};

export const deleteBook = async (id: string) => {
  const book = await Book.findByPk(id);
  if (book) {
    await book.destroy();
    return true;
  }
  return false;
};
