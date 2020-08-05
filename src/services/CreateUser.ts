/**
 * Para criar: name, email, password, techs (que pode ser uma string OU um objeto com uma string e um número)
 */

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>; // Array<string> == string[]
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }
  return user;
}