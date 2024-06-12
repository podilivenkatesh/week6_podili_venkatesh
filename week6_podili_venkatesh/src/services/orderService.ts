import { Order, User, Book } from '../models';

export const getAllOrders = async () => {
  return Order.findAll({ include: [User, Book] });
};

export const getOrderById = async (id: string) => {
  return Order.findByPk(id, { include: [User, Book] });
};

export const createOrder = async (orderData: any) => {
  return Order.create(orderData);
};

export const updateOrder = async (id: string, orderData: any) => {
  const order = await Order.findByPk(id);
  if (order) {
    return order.update(orderData);
  }
  return null;
};

export const deleteOrder = async (id: string) => {
  const order = await Order.findByPk(id);
  if (order) {
    await order.destroy();
    return true;
  }
  return false;
};
