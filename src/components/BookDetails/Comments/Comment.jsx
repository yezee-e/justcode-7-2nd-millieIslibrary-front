import React, { useState } from 'react';
import css from './Comment.module.scss';
import { ThreeDotsVertical, Heart, HeartFill } from 'react-bootstrap-icons';

function CommentList(props) {
  const { review_id, onRemove, nickname, content, created_at } = props;
  const [visible, setVisible] = useState(false);
  const [like, setLike] = useState(0);

  const onLike = e => {
    if (like === 0) {
      setLike(like + 1);
    } else {
      setLike(like - 1);
    }
  };

  return (
    <li className={css.commentSection} key={review_id}>
      <div className={css.imgBox}>
        <img
          src="https://cdn.pixabay.com/photo/2022/06/27/14/38/cat-7287671_1280.jpg"
          alt="유저 이미지"
        />
      </div>
      <div className={css.textBox}>
        <div className={css.deleteBtn}>
          {visible && (
            <button
              className={css.moreArea}
              onClick={() => onRemove(review_id)}
            >
              삭제하기
            </button>
          )}
        </div>
        <div className={css.nickName}>
          <p>{nickname}</p>
          <button
            className={css.more}
            onClick={() => {
              setVisible(!visible);
            }}
          >
            <a>
              <ThreeDotsVertical />
            </a>
          </button>
        </div>
        <span className={css.date}>{created_at}</span>
        <span>{content}</span>
        <div className={css.reviewLike}>
          <p>이 리뷰가 마음에 드시나요?</p>
          <button type="button" className={css.likeBtn} onClick={onLike}>
            {like > 0 ? (
              <a>
                <HeartFill />
              </a>
            ) : (
              <a>
                <Heart />
              </a>
            )}
            <span>{like}</span>
          </button>
        </div>
      </div>
    </li>
  );
}

export default CommentList;
