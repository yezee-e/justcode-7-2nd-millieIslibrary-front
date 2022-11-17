import React, { useState, useRef } from 'react';
import css from './Comments.module.scss';
import CommentList from './CommentList';

function Comments({ setReviewCount }) {
  const [id, setId] = useState(1);
  const [text, setText] = useState('');
  const [commentArray, setCommentArray] = useState([]);
  const value = useRef();

  const addComment = event => {
    setId(id + 1);
    const newComment = {
      id: id,
      plusComment: value.current.value,
      createdAt: new Date().toLocaleString(),
    };
    setCommentArray([...commentArray, newComment]);
    setReviewCount(commentArray.length + 1);
  };

  const commentInput = event => {
    setText(event.target.value);
  };

  const onClick = () => {
    addComment();
    setText('');
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      addComment();
      setText('');
    }
  };

  const onRemove = id => {
    setCommentArray(commentArray.filter(props => props.id !== id));
  };

  return (
    <div className={css.commentsContainer}>
      <div className={css.commentTitle}>
        <h3>한 줄 리뷰</h3>
        <h3 className={css.totalReview}>{commentArray.length}</h3>
      </div>
      <ul>
        {commentArray.map(props => {
          return (
            <CommentList
              key={props.id}
              id={props.id}
              createdAt={props.createdAt}
              plusComment={props.plusComment}
              onRemove={onRemove}
            />
          );
        })}
        <div className={css.commentBox}>
          <div className={css.commentImg}>
            <img
              src="http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"
              alt="유저 이미지"
            />
          </div>
          <div className={css.inputBox}>
            <input
              type="text"
              placeholder="다양한 생각을 남겨주세요"
              ref={value}
              onKeyPress={onKeyPress}
              onChange={commentInput}
              value={text}
            />
            <span className={css.textCount}>{text.length}/50</span>
          </div>
          <button
            className={text.length > 0 ? css.visible : css.disabled}
            onClick={onClick}
          >
            등록
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Comments;
