import React, { useState, useRef } from 'react';
import css from './Comments.module.scss';

function Comments() {
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
        <h3 className={css.totalReview}>{commentArray.length}</h3>
      </div>
      <ul>
        {commentArray.map(({ id, plusComment, createdAt }) => (
          <li className={css.commentSection} key={id}>
            <div className={css.imgBox}>
              <img
                src="http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"
                alt="유저 이미지"
              />
            </div>
            <div className={css.textBox}>
              <div className={css.nickName}>
                <p>hi_Ryan</p>
                <button className={css.more}>
                  <img src="/img/more.svg" alt="" />
                </button>
              </div>
              <span className={css.date}>{createdAt}</span>
              <span>{plusComment}</span>
              <div className={css.reviewLike}>
                <p>이 리뷰가 마음에 드시나요?</p>
                <button type="button" className={css.likeBtn}>
                  <img src="img/heart.svg" />
                  <span>1</span>
                </button>
              </div>
            </div>
          </li>
        ))}
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
