import { Request, Response } from "express";
import { db } from "../../database/knex";

export const deletePurchases = async (req: Request, res: Response) => {
  try {
    const idToDelete = req.params.id;
    if (idToDelete.substring(0,3) !== "pur") {
      res.status(400);
      throw new Error('id must start with the letter "pur"');
    }
    const [productIdToDelete] = await db(
        'purchases'
      ).where({ id: idToDelete });
      if (!productIdToDelete) {
        res.status(404);
        throw new Error('ID not found');
      }
    await db("purchases").del().where({ id: idToDelete });
    res.status(200).send("Purchase deleted successfully");
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    }
    res.status(500).send("Unknown error");
  }
};
