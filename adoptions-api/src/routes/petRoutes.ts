import { Router, Request, Response } from 'express';

const router = Router();

router.get('/pets', (req: Request, res: Response) => {
  res.json({
    //Dummy Data
    message: "Pet List",
    data: [
      { id: 1, name: "Firulais", type: "Perro", status: "Available" },
      { id: 2, name: "Mishi", type: "Gato", status: "Adopted" }
    ]
  });
});

export default router;