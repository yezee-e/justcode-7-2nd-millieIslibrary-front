import React, { useState, useEffect } from 'react';
import css from './Comments.module.scss';

function Comments() {
  const [comment, setComments] = useState([]);

  useEffect(() => {
    fetch('/data/comments.json')
      .then(res => res.json())
      .then(data => {
        setComments(data.comment);
      });
  }, []);

  return (
    <div className={css.commentsContainer}>
      <div className={css.commentTitle}>
        <h3>한 줄 리뷰</h3>
        <h3 className={css.totalReview}>1</h3>
      </div>
      {comment.map(({ id, image, user_name, user_comment, date }) => (
        <div className={css.commentSection} key={id}>
          <div className={css.imgBox}>
            <img src={image} alt="유저 이미지" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
