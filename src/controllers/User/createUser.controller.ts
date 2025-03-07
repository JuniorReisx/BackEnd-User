import { Request, Response } from 'express';
import { supabase } from '../../database/db';

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const { data, error } = await supabase.from('User').insert([
    { name, email }
  ]);
  
  if (error) {
    res.status(500).json({ error: 'Erro ao criar usuário', details: error });
  } else {
    res.status(201).json({ message: 'Usuário criado com sucesso', data });
  }
};


// import { Request, Response } from 'express';
// import { supabase } from '../../database/db';  // Importe o supabase de sua configuração
// import jwt from 'jsonwebtoken';

// export const createUser = async (req: Request, res: Response) => {
//   // Dados enviados no corpo da requisição
//   const { name, email, password, age, gender } = req.body;

//   try {
//     // Verificando se o usuário já existe
//     const { data: existingUser, error: userError } = await supabase
//       .from('users')
//       .select('*')
//       .eq('email', email)
//       .single(); // Seleciona apenas um usuário

//     if (userError) {
//       return res.status(500).json({ error: 'Erro ao verificar usuário', details: userError });
//     }

//     if (existingUser) {
//       return res.status(400).json({ error: 'Usuário já existe com esse email' });
//     }

//     // Inserir o novo usuário no banco
//     const { data, error } = await supabase.from('users').insert([
//       { name, email, password, age, gender }
//     ]);

//     if (error) {
//       return res.status(500).json({ error: 'Erro ao criar usuário', details: error });
//     }

//     // Gerar um token JWT após a criação do usuário
//     const token = jwt.sign({ userId: data[0].id }, process.env.JWT_SECRET as string, {
//       expiresIn: '1h',  // Definindo o tempo de expiração para 1 hora
//     });

//     // Retornando a resposta com o novo usuário e o token gerado
//     return res.status(201).json({ message: 'Usuário criado com sucesso', data, token });
//   } catch (err) {
//     return res.status(500).json({ error: 'Erro inesperado', details: err });
//   }
// };
