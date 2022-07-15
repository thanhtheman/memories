import React from 'react';
import Post from './Post/Post.js';
import useStyles from './styles';
import { useSelector } from 'react-redux';


const Posts = () => {
  
  const posts = useSelector((state) => state.posts);
  const classess = useStyles();

  return (
    <>
        <h1>POSTS</h1>
        <Post />
        <Post />
    
    </>
    

  );
}

export default Posts;