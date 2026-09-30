import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// مسیرها
app.use('/api/auth', authRoutes);

// ریشه برای تست
app.get('/', (req, res) => {
  res.json({ message: 'به بک‌اند پلتفرم مربیان ورزشی خوش آمدید!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});