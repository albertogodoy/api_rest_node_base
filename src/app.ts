import 'dotenv/config';
import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import { router } from './routes';


const PORT = process.env.PORT || 3001;

const messageTooManyRequests = {
    status: 429,
    message: 'Too many requests, please try again later.',
}

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // max requests
    message: messageTooManyRequests,
});

const app = express();
app.use(cors());
app.use(limiter);
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => console.log('listening on port', PORT));

export default app;