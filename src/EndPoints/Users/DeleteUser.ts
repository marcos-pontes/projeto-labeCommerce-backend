import { Request , Response } from "express";
import { db } from "../../database/knex";
import { TUsers } from "../../Types/types";


export const deleteUser = async (req: Request, res: Response) => {
  try {
    const idToDelete = req.params.id;
    if (idToDelete.substring(0, 1) !== 'u') {
      res.status(400);
      throw new Error('id must start with the letter u');
    }
    const [userIdToDelete]: TUsers[] = await db(
      'users'
    ).where({ id: idToDelete });
    if (!userIdToDelete) {
      res.status(404);
      throw new Error('ID not found');
    }
    await db('users').del().where({ id: idToDelete });
    res.status(200).send('User deleted successfully');
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    }
    res.status(500).send('Unknown error');
  }
   
  };

  