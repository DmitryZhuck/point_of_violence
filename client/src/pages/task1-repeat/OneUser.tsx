import React from 'react';
import { Box } from '@mui/material';
import type { UserType } from './types';

type OneUserPropType = {
  oneUser: UserType;
};

export default function OneUser({ oneUser }: OneUserPropType): JSX.Element {
  return (
    <Box>
      {oneUser.name.first}
      {oneUser.name.last}
      {oneUser.email}
      {oneUser.location.country}
      {oneUser.location.street.name}
      {oneUser.location.street.number}
    </Box>
  );
}
