// index.js
import express      from 'express';
import mongoose     from 'mongoose';
import cors         from 'cors';
import 'dotenv/config';

import authRoutes   from './routes/auth.js';
import formRoutes   from './routes/formRoutes.js';
import uploadRoutes from './routes/upload.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth',     authRoutes);
app.use('/api/formdata', formRoutes);
app.use('/api/upload',   uploadRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`🚀 Listening on ${PORT}`));
  })
  .catch(err => {
    console.error('❌ MongoDB Error:', err.message);
    process.exit(1);
  });
