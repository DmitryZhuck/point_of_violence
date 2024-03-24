import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './UserList';
import type { UserData, UserType } from './types';

export default function UserPage(): JSX.Element {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    axios<UserData>('https://randomuser.me/api/?results=10')
      .then(({ data }) => {
        console.log(data);
        console.log(data.results);
        setUsers(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>spisok userov</h1>
      <UserList allUsers={users}/>
    </>
  );
}
