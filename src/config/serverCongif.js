import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
dotenv.config();


export const SALT = bcrypt.genSaltSync(10);
export const PORT = process.env.PORT;
