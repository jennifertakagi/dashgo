import { useQuery } from 'react-query';
import { api } from '../api';

type User = {
  createdAt: string;
  email: string;
  id: string;
  name: string;
};

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get('users');
  const users = data.users.map(user => {
    return {
      createdAt: new Date(user.createdAt).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
      email: user.email,
      id: user.id,
      name: user.name,
    };
  });

  return users;
}

export default function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5, // 5 seconds
  });
}
