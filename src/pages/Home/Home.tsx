import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetPostsQuery } from '../../api/postsApiSlice';
import { Post } from '../../types';
import { Spinner } from '../../components/Spinner/Spinner';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  const { data: posts = [], error, isLoading } = useGetPostsQuery({});
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const handleCardClick = (postId: number) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <div className={styles['home__container']}>
      {posts.map((post: Post) => (
        <div
          key={post.id}
          className={styles['home__card']}
          onClick={() => handleCardClick(post.id)}
        >
          <div className={styles['home__card-title']}><strong>{post.title}</strong></div>
          <div className={styles['home__card-description']}>{post.body}</div>
        </div>
      ))}
    </div>
  );
};
