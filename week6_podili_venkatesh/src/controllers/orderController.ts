import { Request, Response } from 'express';
import { Order, User, Book } from '../models';

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.findAll({ include: [User, Book] });
    res.json(orders);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await Order.findByPk(req.params.id, { include: [User, Book] });
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.create({ ...req.body, userId: (req as any).userId });
    res.status(201).json(order);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (order) {
      await order.update(req.body);
      res.json(order);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (order) {
      await order.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
