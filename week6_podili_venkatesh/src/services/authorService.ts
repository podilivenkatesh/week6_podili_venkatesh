import { Author, Book } from '../models';

export const getAllAuthors = async () => {
  return Author.findAll({ include: [Book] });
};

export const getAuthorById = async (id: string) => {
  return Author.findByPk(id, { include: [Book] });
};

export const createAuthor = async (authorData: any) => {
  return Author.create(authorData);
};

export const updateAuthor = async (id: string, authorData: any) => {
  const author = await Author.findByPk(id);
  if (author) {
    return author.update(authorData);
  }
  return null;
};

export const deleteAuthor = async (id: string) => {
  const author = await Author.findByPk(id);
  if (author) {
    await author.destroy();
    return true;
  }
  return false;
};
