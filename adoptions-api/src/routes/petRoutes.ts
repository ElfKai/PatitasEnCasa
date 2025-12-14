import { Router } from 'express';
import {getPets, createPet} from '../controllers/petController';

const router = Router();

router.get('/', getPets);
router.get('/', createPet);

export default router;