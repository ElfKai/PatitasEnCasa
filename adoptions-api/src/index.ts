import express, { Request, Response } from 'express';
import petRoutes from './routes/petRoutes';

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('¡Server On');
});


app.use('/api', petRoutes);

app.listen(PORT, () => {
  console.log(`Server port: ${PORT}`);
});