import React, {useState} from "react";

export async function getPostsAndAuthors(){
    try {
      const [postsResponse, authorsResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/users/'),
      ]);
  
      if (!postsResponse.ok || !authorsResponse.ok) {
        throw new Error('Error fetching data');
      }
  
      const [posts, authors] = await Promise.all([
        postsResponse.json(),
        authorsResponse.json(),
      ]);
  
      const combinedData = posts.map((post) => {
        const author = authors.find((author) => author.id === post.userId);
        return {
          id: post.id,
          title: post.title,
          body: post.body,
          author: author ? author.name : 'Unknown Author',
        };
      });
  
      return combinedData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};

export async function fetchPostDetails(postId) {
  try {
      const pasdas = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      const post = await pasdas.json();

      const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
      const author = await authorResponse.json();

    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const comments = await commentsResponse.json();

    console.log("fetdetail:",post,author,comments);
    return {post,author,comments};
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};