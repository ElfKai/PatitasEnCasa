import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import petRoutes from './routes/petRoutes';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/pets', petRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('¡Server On');
});




app.listen(PORT, () => {
  console.log(`Server port: ${PORT}`);
});