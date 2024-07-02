import jwt from 'jsonwebtoken';
import { config } from '../config/config';

export const generateToken = (id: string): string => {
    return jwt.sign({ id }, config.jwtSecret, { expiresIn: '1h' });
};

export const verifyToken = (token: string): { id: string } => {
    return jwt.verify(token, config.jwtSecret) as { id: string };
};
