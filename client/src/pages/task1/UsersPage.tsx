import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';
import UsersList from './UsersList';
import type { UserData, UserType } from './types';

export default function UsersPage(): JSX.Element {
  const [users, setUsers] = useState<UserType[]>([]);
  useEffect(() => {
    axios<UserData>('https://randomuser.me/api/?results=10')
      .then(({ data }) => {
        setUsers(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <UsersList allUsers={users} />;
    </Container>
  );
}
