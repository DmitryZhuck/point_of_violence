import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import type { UserType } from './types';

type OneUserPropsType = {
  user: UserType;
};

export default function OneUser({ user }: OneUserPropsType): JSX.Element {
  return (
    <Card style={{ background: '#1d1d1d' }}>
      <CardMedia
        sx={{ height: 200, objectFit: 'cover', objectPosition: 'center' }}
        image={user?.picture.medium}
        title={user.name.first}
      />
      <CardContent>
        <Typography color="white" gutterBottom variant="h5" component="div">
          {`${user.name.first} ${user.name.last}`}
        </Typography>

        <Typography color="white" variant="body2">
          {user.gender}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          Delete
        </Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
