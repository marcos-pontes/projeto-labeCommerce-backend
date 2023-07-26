import { Request, Response } from 'express';
import { db } from '../../database/knex';

export const getPurchases = async (req: Request, res: Response) => {
  const idPurchase = req.params.id;
  try {
    if (idPurchase !== undefined) {
      if (typeof idPurchase !== 'string') {
        res.status(400);
        throw new Error('ID must be a string.');
      }
    }
    const [purchase] = await db('purchases')
      .select(
        'purchases.id AS purchaseId',
        'purchases.buyer AS buyerId',
        'users.name AS buyerName',
        'users.email AS buyerEmail',
        'purchases.total_price AS totalPrice',
        'purchases.created_at AS createdAt'
      ).innerJoin('users', 'purchases.buyer', '=', 'users.id')
      .where({ 'purchases.id': idPurchase });
    if (!purchase) {
      res.status(400);
      throw new Error('Purchase not found.');
    }
    const resultPurchase = await db('purchases_products')
      .select(
        'products.id',
        'products.name',
        'products.price',
        'products.description',
        'products.image_url AS imageUrl',
        'purchases_products.quantity'
      )
      .innerJoin(
        'products',
        'purchases_products.product_id',
        'products.id'
      )
      .where({ 'purchases_products.purchase_id': idPurchase });
    if (resultPurchase.length === 0) {
      res.status(400);
      throw new Error('No purchases found.');
    }
    const result = {
      ...purchase,
      products: resultPurchase
    };
    res.status(200).send(result);
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.status(500).send('Unknown error');
    }
  }
};
