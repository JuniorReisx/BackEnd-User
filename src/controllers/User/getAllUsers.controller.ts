// src/controllers/getAllUsersController.ts
import { Request, Response } from 'express';
import { supabase } from '../../database/db';

export const getAllUsers = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from('User').select('*');
  if (error) {
    res.status(500).json({ error: 'Erro ao buscar dados', details: error });
  } else {
    res.status(200).json(data);
  }
};

// import { Request, Response } from 'express';
// import { supabase } from '../../database/db';

// export const getAllUsers = async (req: Request, res: Response) => {
//   // Realiza a consulta no Supabase
//   const { data, error } = await supabase.from('users').select('*');

//   // Se ocorrer erro na consulta, retorna erro 500
//   if (error) {
//     return res.status(500).json({ error: 'Erro ao buscar dados', details: error.message });
//   }

//   // Caso não haja erro, retorna os dados dos usuários
//   return res.status(200).json(data);
// };
