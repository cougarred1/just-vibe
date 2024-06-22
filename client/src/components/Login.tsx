import React from 'react';
import { Container, Typography, Button } from "../style";

const Login = () => {
  return (
    <Container maxWidth="xl" sx={{ p: 2, mt: 3 }}>
      <Typography variant="h1" gutterBottom>Welcome to Just Vibe!</Typography>
      <Typography variant="body1" gutterBottom>
        Just Vibe is an app where you can get groovy with your friends! With Just Vibe, you can create a profile, search and save your favorite albums/artists, write reviews on your favorite (or not so favorite) albums, set an album of the day, and follow your friends to see what they're grooving out to!
      </Typography>
      <Button variant="contained" color="primary" href="/auth/google">
        Log In With Google
      </Button>
    </Container>
  );
};

export default Login;
