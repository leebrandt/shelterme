import type { NextApiRequest, NextApiResponse } from 'next'
import { Pet } from 'types/pet.types';

type Data = Array<Pet>

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pets = [
    {id:1, name:"Chloe"},
    {id:2, name: "Bruce"}
  ]
  res.status(200).json(pets);
}