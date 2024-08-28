import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery, useGetCommentsByPostIdQuery } from '../../api/postsApiSlice';
import { Spinner } from '../../components/Spinner/Spinner';
import styles from './PostDetail.module.scss';
import { Comment } from './PostDetail.types';

export const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const { data: post, isLoading: postLoading } = useGetPostByIdQuery(postId);
  const { data: comments, isLoading: commentsLoading } = useGetCommentsByPostIdQuery(postId);

  if (postLoading || commentsLoading) return <Spinner />;

  return (
    <div className={styles['post-detail__container']}>
      {post && (
        <div className={styles['post-detail__post']}>
          <h1 className={styles['post-detail__title']}>{post.title}</h1>
          <p className={styles['post-detail__body']}>{post.body}</p>
        </div>
      )}
      <div className={styles['post-detail__comments']}>
        <h2 className={styles['post-detail__comments-title']}>Comments</h2>
        {comments?.map((comment: Comment) => (
          <div key={comment.id} className={styles['post-detail__comment']}>
            <h3 className={styles['post-detail__comment-name']}>{comment.name}</h3>
            <p className={styles['post-detail__comment-email']}>{comment.email}</p>
            <p className={styles['post-detail__comment-body']}>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
