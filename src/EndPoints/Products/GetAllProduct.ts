import { Request, Response } from "express";
import { db } from "../../database/knex";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;
    if (name !== undefined) {
      if (typeof name !== 'string') {
        res.statusCode = 404;
        throw new Error('NAME must be a string.');
      }
    }
    if (name === undefined) {
      const result = await db('products');
      res.status(200).send(result);
    } else {
      const result = await db('products').where('name', 'LIKE', `%${name}%`);
      res.status(200).send(result);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    }
    res.status(500).send('Unknown error');
  }
};
