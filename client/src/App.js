import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import { getPosts } from './actions/posts';

const App = () => {

  const classess = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  });

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);


  return (
    <Container maxWidth='lg'>
      <AppBar className={classess.appBar} position='static' color='inherit'>
        <Typography className={classess.heading} variant='h2' align='center'>
          Private Memories
        </Typography>
        <img className={classess.img} src={memories} alt="memories" height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;
