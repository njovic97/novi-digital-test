import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth';
import { config } from './config/config';
import { errorHandler } from './middleware/errorHandler';

const app: Application = express();
const PORT = config.port;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use(errorHandler);

mongoose.connect(config.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true } as mongoose.ConnectOptions)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
