import { Request, Response } from "express";
import { db } from "../../database/knex";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const name = req.query.name
    if (typeof name !== 'string') {
      res.statusCode = 404;
      throw new Error('ID must be a string.');
    }
    if (name === undefined) {
      const result = await db('users')
      res.status(200).send(result)
  } else {
      const result = await db('users').where('name', 'LIKE', `%${name}%`)
      res.status(200).send(result)
  }
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    }
    res.status(500).send('Unknown error');
  }
};
