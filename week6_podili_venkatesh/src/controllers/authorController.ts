import { Request, Response } from 'express';
import { Author, Book } from '../models';

export const getAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await Author.findAll({ include: [Book] });
    res.json(authors);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const getAuthorById = async (req: Request, res: Response) => {
  try {
    const author = await Author.findByPk(req.params.id, { include: [Book] });
    if (author) {
      res.json(author);
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (author) {
      await author.update(req.body);
      res.json(author);
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (author) {
      await author.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
