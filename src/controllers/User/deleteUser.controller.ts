// src/controllers/deleteUserController.ts
import { Request, Response } from 'express';
import { supabase } from '../../database/db';

export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { error } = await supabase.from('User').delete().eq('id', userId);

  if (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário', details: error });
  } else {
    res.status(200).json({ message: `Usuário com ID ${userId} deletado com sucesso` });
  }
};

// import { Request, Response } from 'express';
// import { supabase } from '../../database/db';

// export const deleteUser = async (req: Request, res: Response) => {
//   const userId = req.params.id;

//   // Verificando se o ID foi passado
//   if (!userId) {
//     return res.status(400).json({ error: 'ID do usuário é necessário' });
//   }

//   // Deletando o usuário com o ID fornecido
//   const { error } = await supabase
//     .from('users')
//     .delete()
//     .eq('id', userId);

//   // Se houver erro ao deletar, retornar o erro
//   if (error) {
//     return res.status(500).json({ error: 'Erro ao deletar usuário', details: error });
//   }

//   // Caso a deleção tenha sido bem-sucedida
//   return res.status(200).json({ message: `Usuário com ID ${userId} deletado com sucesso` });
// };
