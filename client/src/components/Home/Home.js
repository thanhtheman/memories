import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from './styles';
import { getPosts } from '../../actions/posts';
import { useDispatch } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import { useNavigate, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

const Home = () => {

  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Grow in>
        <Container>
          <Grid className={classes.gridContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              <Paper elevation={6}>
                <Pagination />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home;