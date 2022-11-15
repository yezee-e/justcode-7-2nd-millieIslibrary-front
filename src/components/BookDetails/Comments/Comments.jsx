import React from 'react';
import css from './Comments.module.scss';

function Comments() {
  return (
    <div className={css.commentsContainer}>
      <h3>한 줄 리뷰</h3>
      <h3 className={css.totalReview}>1</h3>
    </div>
  );
}

export default Comments;
