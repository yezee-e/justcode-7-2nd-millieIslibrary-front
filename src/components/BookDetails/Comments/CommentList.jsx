import React, { useState } from 'react';
import css from './CommentList.module.scss';
import { ThreeDotsVertical, Heart, HeartFill } from 'react-bootstrap-icons';

function CommentList(props) {
  const { id, createdAt, plusComment, onRemove } = props;
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
    <li className={css.commentSection} key={id}>
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
              onClick={() => {
                if (window.confirm('정말 삭제할까요?')) {
                  alert('성공적으로 삭제되었습니다!');
                  onRemove(id);
                }
              }}
            >
              삭제하기
            </button>
          )}
        </div>
        <div className={css.nickName}>
          <p>hi_Ryan</p>
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
        <span className={css.date}>{createdAt}</span>
        <span>{plusComment}</span>
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
