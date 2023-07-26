import { Request, Response } from "express";
import { db } from "../../database/knex";
import { TProduct } from "../../Types/types";

export const editProduct = async (req: Request, res: Response) => {
  try {
    const idToEdit = req.params.id;
    const newId = req.body.id;
    const newName = req.body.name;
    const newPrice = req.body.price;
    const newDescription = req.body.description;
    const newImageUrl = req.body.imageURL;

    if (idToEdit.substring(0, 4) !== 'prod') {
      res.status(400);
      throw new Error('ID must start with the letter prod.');
    }

    if (newId !== undefined) {
      if (typeof newId !== 'string') {
        res.statusCode = 400;
        throw new Error('ID must be a string.');
      }
      if (newId.length > 7) {
        res.statusCode = 400;
        throw new Error('ID must be at least 7 characters.');
      }
    }
    if (newName !== undefined) {
      if (typeof newName !== 'string') {
        res.statusCode = 400;
        throw new Error('NAME must be a string.');
      }
      if (newName.length < 2) { 
        res.statusCode = 400;
        throw new Error('ID must be at least 2 characters.');
      }
    }
    if (newPrice !== undefined) {
      if (typeof newPrice !== 'number') {
        res.statusCode = 400;
        throw new Error('PRICE must be a number.');
      }
    }
    if (newDescription !== undefined) {
      if (typeof newDescription !== 'string') {
        res.statusCode = 400;
        throw new Error('DESCRIPTION must be a string.');
      }
    }
    if (newImageUrl !== undefined) {
      if (typeof newImageUrl !== 'string') {
        res.statusCode = 400;
        throw new Error('IMAGE_URL must be a string.');
      }
    }
    const [product]: TProduct[] | undefined[] = await db('products').where({
      id: idToEdit,
    });
    if (!product) {
      res.statusCode = 404;
      throw new Error('ID not found');
    }
    const newProduct: TProduct = {
      id: newId || product.id,
      name: newName || product.name,
      price: newPrice || product.price,
      description: newDescription || product.description,
      image_url: newImageUrl || product.image_url,
    };
    await db('products').update(newProduct).where({ id: idToEdit });
    res.status(200).send('Product successfully edited');
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    }
    res.status(500).send('Unknown error');
  }
};
