export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
}

export const users: User[] = [
  {
    id: '1',
    username: 'john_doe',
    password: 'password123',
    email: 'john.doe@example.com',
  },
  {
    id: '2',
    username: 'jane_smith',
    password: 'password456',
    email: 'jane.smith@example.com',
  },
]; 