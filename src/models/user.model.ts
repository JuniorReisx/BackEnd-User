import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const getAllUsers = async () => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) {
    throw new Error('Erro ao buscar usuários');
  }
  return data;
};

export const createUser = async (name: string, age: number, gender: string, email: string, password: string) => {
  const { data, error } = await supabase.from('users').insert([{ name, age, gender, email, password }]);
  if (error) {
    throw new Error('Erro ao criar usuário');
  }
  return data;
};

export const updateUser = async (id: number, name: string, age: number, gender: string, email: string, password: string) => {
  const { data, error } = await supabase
    .from('users')
    .update({ name, age, gender, email, password })
    .eq('id', id);
  if (error) {
    throw new Error('Erro ao atualizar usuário');
  }
  return data;
};

export const deleteUser = async (id: number) => {
  const { data, error } = await supabase.from('users').delete().eq('id', id);
  if (error) {
    throw new Error('Erro ao deletar usuário');
  }
  return data;
};
