import React from 'react';
import { useGetPostsQuery } from '../../api/postsApiSlice';
import { extractErrorMessage } from '../../utils/error';
import { Post } from '../../types';
import { Spinner } from '../../components/Spinner/Spinner';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  const { data: posts = [], error, isLoading } = useGetPostsQuery({});

  if (isLoading) return <Spinner />;

  if (error) {
    const errorMessage = extractErrorMessage(error);
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div className={styles['home__container']}>
      {posts.map((post: Post) => (
        <div key={post.id} className={styles['home__card']}>
          <div className={styles['home__card-title']}><strong>{post.title}</strong></div>
          <div className={styles['home__card-description']}>{post.body}</div>
        </div>
      ))}
    </div>
  );
};
