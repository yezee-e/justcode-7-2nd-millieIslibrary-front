import React, { useState, useRef, useEffect } from 'react';
import css from './Comments.module.scss';
import CommentList from './CommentList';
import { useParams } from 'react-router-dom';

function Comments() {
  const [text, setText] = useState('');
  const [comments, setComment] = useState([]);
  const value = useRef();
  const params = useParams();

  const addComment = event => {
    fetch(`http://localhost:8000/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        books_id: params.id,
        content: value.current.value,
      }),
    })
      .then(res => res.json())
      .then(res => {
        fetch(`http://localhost:8000/book-detail/${params.id}`)
          .then(res => res.json())
          .then(data => {
            setComment(data.reviewInfo.reviewArray);
          });
      });
  };

  useEffect(() => {
    fetch(`http://localhost:8000/book-detail/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setComment(data.reviewInfo.reviewArray);
      });
  }, []);

  const onRemove = review_id => {
    if (window.confirm('삭제 하시겠습니까?')) {
      fetch(`http://localhost:8000/review`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          review_id: review_id,
        }),
      })
        .then(res => res.json())
        .then(result => {
          setComment(comments.filter(props => props.review_id !== review_id));
        });
    }
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

  return (
    <div className={css.commentsContainer}>
      <div className={css.commentTitle}>
        <h3>한 줄 리뷰</h3>
        <h3 className={css.totalReview}>{comments.length}</h3>
      </div>
      <ul>
        {comments.map(props => {
          return (
            <CommentList
              key={props.id}
              review_id={props.review_id}
              onRemove={onRemove}
              nickname={props.nickname}
              content={props.content}
              created_at={props.created_at}
            />
          );
        })}
        <div className={css.commentBox}>
          <div className={css.commentImg}>
            <img
              src="https://cdn.pixabay.com/photo/2022/06/27/14/38/cat-7287671_1280.jpg"
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
