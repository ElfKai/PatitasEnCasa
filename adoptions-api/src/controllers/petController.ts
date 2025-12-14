import { Request, Response } from "express";
import { query } from '../config/db';

export const getPets = async (req: Request, res: Response) => {
    try {
         const result = await query('SELECT * FROM pets ORDER BY created_at DESC');
         res.status(200).json(result.rows);

    }catch(error){
        console.error('Error fetching pets:', error);
        res.status(500).json({ message: 'Server Intern Error'});
    }
};

export const createPet = async (req: Request, res: Response) =>{
    res.status(501).json({ message: 'Not implemented yet'});
};