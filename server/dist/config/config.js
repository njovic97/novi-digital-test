"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.MONGODB_URI) {
    throw new Error('Missing MONGODB_URI in .env file');
}
if (!process.env.JWT_SECRET) {
    throw new Error('Missing JWT_SECRET in .env file');
}
exports.config = {
    mongodbUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT || 5000,
};
