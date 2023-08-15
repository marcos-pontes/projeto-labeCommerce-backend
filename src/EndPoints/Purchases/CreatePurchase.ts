import { Request, Response } from "express";
import { db } from "../../database/knex";

export const CreatePurchase = async (req: Request, res: Response) => {
  try {
    const { id, buyer, products } = req.body;
    const createdAt: string = new Date()
      .toISOString()
      if(!id || !buyer || !products){
        res.statusCode = 404;
        throw new Error('Check the filled fields.');
      }

      if(!id) {
        res.status(400);
        throw new Error('Enter an ID.');
      }
    
      if (id.substring(0, 3) !== 'pur') {
        res.status(400);
        throw new Error('ID must start with the letter pur.');
      }
       if (id.length <5) {
        res.status(400);
        throw new Error('ID must be at least 6 characters.');
      } 
      const [purchaseID] = await db('purchases').where('id', 'like', `${id}`);
      if (purchaseID) {
        res.status(400);
        throw new Error('ID already exists.');
      }
    
    if (buyer) {
      if (buyer.substring(0, 1) !== 'u') {
        res.status(400);
        throw new Error('ID must start with the letter u.');
      }
      if (buyer.length !== 4) {
        res.status(400);
        throw new Error('ID user must be at least 4 characters.');
      }
      const [user] = await db('users').where('id', 'like', `${buyer}`);
      if (!user) {
        res.status(400);
        throw new Error('USER not found.');
      }
    } else {
      res.status(400);
      throw new Error('Enter an ID user');
    }
    let total_price = 0

    for (let value of products) {
      const productID = value.id;
      const prodQuantity = value.quantity;
      const productPrice : any = await db('products').select('price').where('id', 'like', `${productID}`);
      const resultProduct = productPrice[0].price * prodQuantity;
      total_price += resultProduct;
    }
    
    const newPurchase = {
      id,
      buyer,
      total_price,
      created_at: createdAt,
    };
    await db('purchases').insert(newPurchase);
    for (let value of products) {
      const productID = value.id;
      const prodQuantity = value.quantity;
      
      const newPurchaseProduct = {
        purchase_id: id,
        product_id: productID,
        quantity: prodQuantity,
      };
      await db('purchases_products').insert(newPurchaseProduct);
    }
    res.status(201).send('Purchase successfully created');
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    }
    res.status(500).send('Unknown error');
  }
};
