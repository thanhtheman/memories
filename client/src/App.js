import React from 'react';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter className={classes.appBar}>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App;
