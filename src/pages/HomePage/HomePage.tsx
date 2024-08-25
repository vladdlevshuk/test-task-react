import React from 'react';
import { useGetPostsQuery } from '../../api/apiSlice';
import styles from './HomePage.module.css';
import { Post } from '../../types/Post';
import { extractErrorMessage } from '../../utils/errorUtils';
import Spinner from '../../components/Spinner/Spinner';

const HomePage: React.FC = () => {
  const { data: posts = [], error, isLoading } = useGetPostsQuery({});

  if (isLoading) return <Spinner />;

  if (error) {
    const errorMessage = extractErrorMessage(error);
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div className={styles.container}>
      {posts.map((post: Post) => (
        <div key={post.id} className={styles.card}>
          <div className={styles['card-title']}><strong>{post.title}</strong></div>
          <div className={styles['card-description']}>{post.body}</div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
