import { Request, Response } from "express";
import { db } from "../../database/knex";
import { TProduct } from "../../Types/types";

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const idToDelete = req.params.id;
    if (idToDelete.substring(0, 4) !== 'prod') {
      res.status(400);
      throw new Error('id must start with the letter prod');
    }
    const [productIdToDelete]: TProduct[] = await db(
      'products'
    ).where({ id: idToDelete });
    if (!productIdToDelete) {
      res.status(404);
      throw new Error('ID not found');
    }
    await db('products').del().where({ id: idToDelete });
    res.status(200).send('Product deleted successfully');
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    }
    res.status(500).send('Unknown error');
  }
};

