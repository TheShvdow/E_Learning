import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import listEndpoints from 'express-list-endpoints';
import cors from 'cors';
import userRoutes from './src/routes/user.routes';
import formationRoutes from './src/routes/formation.routes';
import tutorialRoutes from './src/routes/tutorial.routes';
import coursRoutes from './src/routes/cours.routes';
import certificatRoutes from './src/routes/certificat.routes';
import UserRoutes from './src/infrastructure/routes/user.routes';
dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:8000',
  credentials: true
}));

app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'supersecret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 // 1h
  }
}));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// app.use('/api/v1/users', userRoutes);
app.use('/api/v1/formations', formationRoutes);
app.use('/api/v1/tutorials', tutorialRoutes);
app.use('/api/v1/cours', coursRoutes);
app.use('/api/v1/certificats', certificatRoutes);

// Route From Infrastructure
app.use('/api/v1/users', UserRoutes);





console.log('📡 Routes exposées :');
console.table(listEndpoints(app));


app.listen(8000, () => console.log('Server running on http://localhost:8000'));
