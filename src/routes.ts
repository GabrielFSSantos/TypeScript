/**
 * Usar Ctrl+space ou ponto (.) mostra opções de inserção 
 */

import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    name: 'Leirbag Epilef',
    email: '123DeOliveira4@email.com',
    password: '1234',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'JavaScript', experience: 100 }
    ],
  });

  return res.json({ message: 'Hello World' });
}