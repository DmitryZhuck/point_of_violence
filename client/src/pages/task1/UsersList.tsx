import React from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import type { UserType } from './types';
import OneUser from './OneUser';

type UsersListPropsType = {
  allUsers: UserType[];
};

export default function UsersList({ allUsers }: UsersListPropsType): JSX.Element {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(min-width:601px) and (max-width:960px)');

  const getGridItemSize = (): number => {
    if (isSmallScreen) {
      return 12;
    }
    if (isMediumScreen) {
      return 5.5;
    }
    return 3.5;
  };

  return (
    <Grid container rowGap={3} columnGap={3} justifyContent="center">
      {allUsers.map((user) => (
        <Grid item xs={getGridItemSize()} key={user.login.uuid}>
          <OneUser user={user} />
        </Grid>
      ))}
    </Grid>
  );
}
