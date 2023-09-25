import { NextApiRequest, NextApiResponse } from 'next';
import { burgers } from '../../../data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  const burger = burgers.find((burger) => burger.id === id);
  res.status(200).json(burger);
}
