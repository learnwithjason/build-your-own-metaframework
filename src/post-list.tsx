import React, { useEffect, useState } from 'react';
import { getPosts } from './get-posts';

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const data = await getPosts();

      setPosts(data);
    }

    loadPosts();
  }, []);

  return (
    <>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};
