// src/types/express/index.d.ts
import * as express from 'express';

// Extende o tipo Request do Express para incluir a propriedade 'user'
declare global {
  namespace Express {
    interface Request {
      user?: any; // Aqui você pode definir o tipo de 'user', como por exemplo, 'User' se tiver um tipo de usuário definido.
    }
  }
}
