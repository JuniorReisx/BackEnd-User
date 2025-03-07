import { Request, Response } from 'express';
import { supabase } from '../../database/db';

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  const { data, error } = await supabase
    .from('User')
    .update({ name, email })
    .eq('id', userId);

  if (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário', details: error });
  } else {
    res.status(200).json({ message: 'Usuário atualizado com sucesso', data });
  }
};

// import { Request, Response } from 'express';
// import { supabase } from '../../database/db';

// export const updateUser = async (req: Request, res: Response) => {
//   // Recupera o ID do usuário na URL
//   const userId = req.params.id;

//   // Extrai os dados enviados na requisição
//   const { name, email } = req.body;

//   // Validação simples para garantir que o nome e o email são fornecidos
//   if (!name || !email) {
//     return res.status(400).json({ error: 'Nome e email são obrigatórios' });
//   }

//   // Atualiza o usuário no banco de dados
//   const { data, error } = await supabase
//     .from('users')  // Se sua tabela é 'users', ajuste para 'users'
//     .update({ name, email })
//     .eq('id', userId);

//   // Se ocorrer erro na atualização
//   if (error) {
//     return res.status(500).json({ error: 'Erro ao atualizar usuário', details: error.message });
//   }

//   // Se a atualização for bem-sucedida
//   return res.status(200).json({ message: 'Usuário atualizado com sucesso', data });
// };
