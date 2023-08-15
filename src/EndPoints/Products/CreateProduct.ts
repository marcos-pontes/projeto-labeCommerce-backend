import { Request, Response } from "express";
import { db } from "../../database/knex";
import { TProduct } from "../../Types/types";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { id, name, price, description, image_url } = req.body;
    if (!id || !name || !price || !description || !image_url) {
      res.statusCode = 428;
      throw new Error('Check the filled fields.');
    }
    if (typeof id !== 'string') {
      res.statusCode = 404;
      throw new Error('ID must be a string.');
    }
     if (id.substring(0, 4) !== 'prod') {
        res.status(400);
        throw new Error('ID must start with the letter prod.');
      }
    if (id.length < 7) {
      res.statusCode = 404;
      throw new Error('ID must be at least 7 characters.');
    }
    if (typeof name !== 'string') {
      res.statusCode = 404;
      throw new Error('NAME must be a string.');
    }
    if (name.length < 2) {
      res.statusCode = 404;
      throw new Error('NAME must be at least 2 characters.');
    }
    if (typeof price !== 'number') {
      res.statusCode = 404;
      throw new Error('Price must be a number.');
    }
    if (typeof description !== 'string') {
      res.statusCode = 404;
      throw new Error('DESCRIPTION must be a string.');
    }
    if (typeof image_url !== 'string') {
      res.statusCode = 404;
      throw new Error('IMAGE_URL must be a string.');
    }
    const [productIdAlreadyExists]: TProduct[] | undefined[] = await db(
      'products'
    ).where({ id });
    if (productIdAlreadyExists) {
      res.statusCode = 404;
      throw new Error('ID already exists');
    }
    const newProduct: TProduct = {
      id,
      name,
      price,
      description,
      image_url,
    };
    await db('products').insert(newProduct);
    res.status(201).send('Product successfully created.');
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    }
    res.status(500).send('Unknown error');
  }
};
