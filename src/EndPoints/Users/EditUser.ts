import { Request, Response } from "express";
import { db } from "../../database/knex";
import { TUsers } from "../../Types/types";

export const editUser = async (req: Request, res: Response) => {
  try {
    const idToEdit = req.params.id;
    const newId = req.body.id;
    const newName = req.body.name;
    const newEmail = req.body.email;
    const newPassword = req.body.password;
    
    if (idToEdit.substring(0, 1) !== "u") {
      res.status(400);
      throw new Error('ID must start with the letter u');
    }

    if (newId !== undefined) {
      if (typeof newId !== 'string') {
        res.statusCode = 400;
        throw new Error('ID must be a string.');
      }
      if (newId.length < 3) {
        res.statusCode = 400;
        throw new Error('ID must be at least 4 characters.');
      }
    }
    if (newName !== undefined) {
      if (typeof newName !== 'string') {
        res.statusCode = 400;
        throw new Error('NAME must be a string.');
      }
      if (newName.length < 2) { 
        res.statusCode = 400;
        throw new Error('NAME must be at least 2 characters.');
      }
    }
    if (newEmail !== undefined) {
      if (typeof newEmail !== 'string') {
        res.statusCode = 400;
        throw new Error('PRICE must be a number.');
      }
      if (newId.length < 4) {
        res.statusCode = 400;
        throw new Error('NEW ID must be at least 4 characters.');
      }
    }
    if (newPassword !== undefined) {
      if (typeof newPassword !== 'string') {
        res.statusCode = 400;
        throw new Error('PASSWORD must be a string.');
      }
    }
    
    const [user]: TUsers[] | undefined[] = await db('users').where({
      id: idToEdit,
    });
    if (!user) {
      res.statusCode = 404;
      throw new Error('ID not found');
    }
    const newUser: TUsers = {
      id: newId || user.id,
      name: newName || user.name,
      email: newEmail || user.email,
      password: newPassword || user.password,
      created_at: user.created_at,
    };
    await db('users').update(newUser).where({ id: idToEdit });
    res.status(200).send('User successfully edited');
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    }
    res.status(500).send('Unknown error');
  }
};
