import express from 'express';
import session from 'express-session';
import listEndpoints from 'express-list-endpoints';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import formationRoutes from './routes/formation.routes';
import tutorialRoutes from './routes/tutorial.routes';
import coursRoutes from './routes/cours.routes';
import certificatRoutes from './routes/certificat.routes';
import UserRoutes from './infrastructure/routes/user.routes';
import { errorHandler } from './middlewares/error.middleware';
import progressRoutes from './infrastructure/routes/progress.routes';




const app = express();

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization','access-control-allow-origin'],
  
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

// Pregess Route
app.use('/api/v1/progress', progressRoutes);

// Route From Infrastructure
app.use('/api/v1/users', UserRoutes);
app.use(errorHandler);





export default app;