import React from 'react';
import { Box } from '@mui/material';
import type { UserType } from './types';
import OneUser from './OneUser';

type UsersListPropsType = {
  allUsers: UserType[];
};

export default function UserList({ allUsers }: UsersListPropsType): JSX.Element {
  return (
    <Box>
      {allUsers.map((user) => (
        <Box key={user.login.uuid}>
          <OneUser oneUser={user} />
        </Box>
      ))}
    </Box>
  );
}
