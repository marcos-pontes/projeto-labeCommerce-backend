import { Request, Response } from "express";
import { db } from "../../database/knex";
import { TUsers } from "../../Types/types";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { id, name, email, password } = req.body;
    const created_at = new Date().toISOString();
    if (typeof id !== 'string') {
      res.statusCode = 404;
      throw new Error('id must be a string');
    }
    if (id.substring(0, 1) !== 'u') {
      res.status(400);
      throw new Error('ID must start with the letter u.');
    }
    if (id.length < 4) {
      res.statusCode = 404;
      throw new Error('id must be at least 4 characters');
    }
    if (typeof name !== 'string') {
      res.statusCode = 404;
      throw new Error('name must be a string');
    }
    if (name.length < 2) {
      res.statusCode = 404;
      throw new Error('name must be at least 2 characters');
    }
    if (
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,12}$/g)){
      res.statusCode = 404;
      throw new Error(
        'password must be between 8 and 12 characters, with uppercase and lowercase letters and at least one number and one special character'
      );
    }
    const [userIdAlreadyExists]: TUsers[] | undefined[] = await db(
      'users'
    ).where({ id });
    if (userIdAlreadyExists) {
      res.statusCode = 404;
      throw new Error('id already exists');
    }
    const [userEmailAlreadyExists]: TUsers[] | undefined[] = await db(
      'users'
    ).where({ email });
    if (userEmailAlreadyExists) {
      res.statusCode = 400;
      throw new Error('email already exists');
    }
    const newUser: TUsers = {
      id,
      name,
      email,
      password,
      created_at,
    };
    await db('users').insert(newUser);
    res.status(201).send('User successfully created');
  } catch (error) {
    if (error instanceof Error) {
      res.send(error.message);
    }
    res.status(500).send('Unknown error');
  }
};
