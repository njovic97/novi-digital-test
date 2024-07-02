import dotenv from 'dotenv';
dotenv.config();

if (!process.env.MONGODB_URI) {
    throw new Error('Missing MONGODB_URI in .env file');
}

if (!process.env.JWT_SECRET) {
    throw new Error('Missing JWT_SECRET in .env file');
}

export const config = {
    mongodbUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT || 5000,
};
